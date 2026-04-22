-- Create leads table for storing curriculum and partnership form submissions
create table public.leads (
    id uuid primary key default gen_random_uuid(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    type text not null check (type in ('curriculum', 'partner', 'sponsor')),
    name text not null,
    email text not null,
    phone text not null,
    message text
);

-- Enable RLS for leads
alter table public.leads enable row level security;

-- Leads Policies
-- Allow anyone to insert (since the landing page form is public)
create policy "Allow public inserts for leads"
on public.leads for insert
with check (true);

-- Allow authenticated users (Admins) to read leads
create policy "Allow authenticated admins to read leads"
on public.leads for select
to authenticated
using (true);

-- Update registrations policy so authenticated users (Admins) can see them
create policy "Allow authenticated admins to read registrations"
on public.registrations for select
to authenticated
using (true);

-- Create Storage bucket for assets (curriculum pdf, etc)
insert into storage.buckets (id, name, public)
values ('assets', 'assets', true)
on conflict (id) do update set public = true;

-- Storage Policies for 'assets' bucket
-- Allow public read access to the bucket
create policy "Public Access"
on storage.objects for select
using (bucket_id = 'assets');

-- Allow authenticated users to insert/update/delete objects in the bucket
create policy "Authenticated users can upload objects"
on storage.objects for insert
to authenticated
with check (bucket_id = 'assets');

create policy "Authenticated users can update objects"
on storage.objects for update
to authenticated
using (bucket_id = 'assets');

create policy "Authenticated users can delete objects"
on storage.objects for delete
to authenticated
using (bucket_id = 'assets');
