-- Enable INSERT, UPDATE, and DELETE for authenticated users on workshops table
create policy "Allow authenticated users to insert workshops"
on public.workshops for insert
to authenticated
with check (true);

create policy "Allow authenticated users to update workshops"
on public.workshops for update
to authenticated
using (true)
with check (true);

create policy "Allow authenticated users to delete workshops"
on public.workshops for delete
to authenticated
using (true);
