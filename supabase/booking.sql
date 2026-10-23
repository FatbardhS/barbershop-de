-- Booking storage for the "Termin buchen" popup.
-- Run once in Supabase: Dashboard > SQL Editor > New query > paste this file > Run.
--
-- Visitors never read or write the bookings table directly. They can only:
--   busy_slots()  see which times are taken (no names or phone numbers)
--   book_slot()   book a free time; overlapping bookings for the same barber are rejected
-- To cancel a booking, open Table Editor > bookings and set "cancelled" to true (or delete the row).

create extension if not exists btree_gist with schema extensions;

create table if not exists public.bookings (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  -- Local shop time, e.g. 2026-10-23 15:30
  starts_at timestamp not null,
  duration_minutes int not null check (duration_minutes between 5 and 240),
  ends_at timestamp generated always as (starts_at + make_interval(mins => duration_minutes)) stored,
  barber text not null check (char_length(barber) between 1 and 100),
  service text not null check (char_length(service) between 1 and 100),
  customer_name text not null check (char_length(customer_name) between 2 and 100),
  customer_phone text not null check (char_length(customer_phone) between 6 and 40),
  cancelled boolean not null default false,
  -- The same barber can never have two overlapping bookings
  constraint bookings_no_overlap exclude using gist (
    barber with =,
    tsrange(starts_at, ends_at) with &&
  ) where (not cancelled)
);

alter table public.bookings enable row level security;
revoke all on public.bookings from anon, authenticated;

create or replace function public.busy_slots(from_date date, to_date date)
returns table (barber text, starts_at timestamp, ends_at timestamp)
language sql
stable
security definer
set search_path = public
as $$
  select b.barber, b.starts_at, b.ends_at
  from bookings b
  where not b.cancelled
    and b.starts_at >= from_date
    and b.starts_at < to_date + 1;
$$;

-- p_barber is a barber's name, or 'Egal' to take the first free one from p_barbers.
-- Returns the barber the booking was made with; raises 'slot_taken' if none is free.
create or replace function public.book_slot(
  p_starts_at timestamp,
  p_duration int,
  p_barber text,
  p_barbers text[],
  p_service text,
  p_name text,
  p_phone text
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  candidate text;
begin
  if p_starts_at < (now() at time zone 'Europe/Berlin') then
    raise exception 'slot_in_past';
  end if;

  foreach candidate in array (case when p_barber = 'Egal' then p_barbers else array[p_barber] end) loop
    begin
      insert into bookings (starts_at, duration_minutes, barber, service, customer_name, customer_phone)
      values (p_starts_at, p_duration, candidate, p_service, trim(p_name), trim(p_phone));
      return candidate;
    exception when exclusion_violation then
      -- This barber is taken at that time; try the next one
    end;
  end loop;

  raise exception 'slot_taken';
end;
$$;

revoke all on function public.busy_slots(date, date) from public;
revoke all on function public.book_slot(timestamp, int, text, text[], text, text, text) from public;
grant execute on function public.busy_slots(date, date) to anon;
grant execute on function public.book_slot(timestamp, int, text, text[], text, text, text) to anon;
