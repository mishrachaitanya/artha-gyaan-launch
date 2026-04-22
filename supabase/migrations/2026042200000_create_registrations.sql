-- Create registrations table for Artha Gyaan workshops
create table public.registrations (
    id uuid primary key default gen_random_uuid(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    status text not null default 'PENDING' check (status in ('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED')),
    amount integer not null, -- amount in paise (e.g., 99900)
    parent_name text not null,
    parent_email text not null,
    parent_phone text not null,
    student_name text,
    student_age integer not null,
    razorpay_order_id text not null,
    razorpay_payment_id text,
    razorpay_signature text
);

-- Enable Row Level Security (RLS)
alter table public.registrations enable row level security;

-- Policies
-- We allow anonymous/public inserts so the backend flow can create them without strict user auth
create policy "Allow inserts for pending registrations"
on public.registrations for insert
with check (status = 'PENDING');

-- We only allow reading if you know the exact ID (or based on some secure flow), 
-- but realistically the edge functions bypass RLS by using the service_role key.
-- So we don't strictly need public read access for registrations.
