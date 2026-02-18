-- Seed data for local testing

insert into categories (id, title, description) values
  ('11111111-1111-1111-1111-111111111111', 'Pizza', 'Pizzat uunista'),
  ('22222222-2222-2222-2222-222222222222', 'Burger', 'Burgerit ja ranskalaiset'),
  ('33333333-3333-3333-3333-333333333333', 'Juomat', 'Virvoitusjuomat')
on conflict (id) do nothing;

insert into menu_items (title, category_id, price, description, image_url, in_stock) values
  ('Margherita', '11111111-1111-1111-1111-111111111111', 12.50, 'Tomaatti, mozzarella, basilika', null, true),
  ('Pepperoni',   '11111111-1111-1111-1111-111111111111', 14.90, 'Pepperoni, mozzarella, tomaattikastike', null, true),
  ('Cheeseburger','22222222-2222-2222-2222-222222222222', 11.90, 'Naudanlihapihvi, cheddar, salaatti', null, true),
  ('Ranskalaiset','22222222-2222-2222-2222-222222222222',  4.50, 'Rapeat ranskalaiset', null, true),
  ('Cola 0.33l',  '33333333-3333-3333-3333-333333333333',  2.90, 'Kylmä juoma', null, true);
