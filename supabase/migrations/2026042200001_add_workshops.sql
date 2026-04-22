-- Create workshops table
create table public.workshops (
    id uuid primary key default gen_random_uuid(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    title text not null,
    venue text not null,
    date timestamp with time zone not null,
    capacity integer not null,
    price_paise integer not null,
    status text not null default 'UPCOMING' check (status in ('UPCOMING', 'SOLD_OUT', 'COMPLETED'))
);

-- Enable Row Level Security (RLS)
alter table public.workshops enable row level security;

-- Policies for workshops
create policy "Allow public read access to workshops"
on public.workshops for select
using (true);

-- Empty out test records in registrations so we can safely add a NOT NULL column
truncate table public.registrations;

-- Link registrations to workshops
alter table public.registrations 
add column workshop_id uuid not null references public.workshops(id) on delete restrict;

-- Insert a seed workshop for testing natively
insert into public.workshops (title, venue, date, capacity, price_paise, status)
values (
  'Lucknow Pilot Batch', 
  'Gomti Nagar Community Hall, Lucknow', 
  timezone('utc'::text, now() + interval '30 days'), 
  50, 
  99900, 
  'UPCOMING'
);
