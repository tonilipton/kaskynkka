-- Supabase SQL to insert all menu items
-- Run this in Supabase SQL Editor

-- Clear existing menu items (optional - remove if you want to keep existing)
-- DELETE FROM menu_items;

-- Insert menu items
INSERT INTO menu_items (title, description, price, category, image, sold_out) VALUES
  -- Salaatit (Salads)
  ('Hedelmäinen Broilerisalaatti', 'A fresh chicken salad with fruits. Perfect as a light meal or starter.', 19.00, 'Salaatit', '/images/salad-chicken.jpg', false),
  ('Lohi-Caesar-Salaatti', 'Green salad with tomato, red onion, hot-smoked salmon, and Caesar dressing.', 20.00, 'Salaatit', '/images/salad-caesar.jpg', false),
  
  -- Lämpimät Ruoat (Warm Meals)
  ('Kolmen Pippurin Pihvi', '160g beef tenderloin with creamy three-pepper sauce. Our signature dish!', 36.00, 'Lämpimät Ruoat', '/images/steak-pepper.jpg', false),
  ('Metsästäjänpihvi', '160g sliced beef tenderloin with rich chanterelle mushroom sauce. A Finnish classic!', 33.00, 'Lämpimät Ruoat', '/images/steak-hunter.jpg', false),
  ('Black & White -Pihvi', '200g beef sirloin with Madeira and béarnaise sauces.', 31.00, 'Lämpimät Ruoat', '/images/steak-bw.jpg', false),
  ('Talon Pihvi', '200g beef sirloin with chanterelle sauce.', 31.00, 'Lämpimät Ruoat', '/images/steak-house.jpg', false),
  ('Grillipihvi', '200g beef sirloin with garlic herb butter.', 30.50, 'Lämpimät Ruoat', '/images/steak-grill.jpg', false),
  ('Jättilehtipihvi', '160g thin beef sirloin with grill seasoning butter.', 29.00, 'Lämpimät Ruoat', '/images/steak-leaf.jpg', false),
  ('Bearnaisepihvi', '160g pork sirloin with béarnaise sauce.', 25.00, 'Lämpimät Ruoat', '/images/steak-bearnaise.jpg', false),
  ('Porsaanselykset Dijonkastike', '2x80g pork sirloin steaks with Dijon mustard sauce.', 25.00, 'Lämpimät Ruoat', '/images/pork-dijon.jpg', false),
  ('Pariloitua Maksaa', 'Grilled liver with crispy bacon, lingonberries, and cream sauce.', 25.00, 'Lämpimät Ruoat', '/images/liver.jpg', false),
  ('Aurajuusto-Persikkakuorrutettua Broilerinfileetä', 'Chicken breast fillet with blue cheese and peach topping.', 25.50, 'Lämpimät Ruoat', '/images/chicken-bluecheese.jpg', false),
  ('Broileria ja Mustaherukka-Portviinikastiketta', 'Chicken breast with blackcurrant-port wine sauce.', 25.50, 'Lämpimät Ruoat', '/images/chicken-blackcurrant.jpg', false),
  ('Paistetut Muikut', 'Fried vendace - fresh whitefish from Finnish waters.', 25.00, 'Lämpimät Ruoat', '/images/vendace.jpg', false),
  ('Savustettua Lohta', '160g smoked salmon fillet with remoulade sauce.', 29.50, 'Lämpimät Ruoat', '/images/salmon-smoked.jpg', false),
  ('Gratinoitu Espanjalainen Kasvispaistos', 'Spanish vegetable gratin with grilled vegetables, feta cheese cubes, and béarnaise.', 21.50, 'Lämpimät Ruoat', '/images/vegetable-gratin.jpg', false),
  ('Välimeren Kanaleipä', 'White bread with chicken breast and Mediterranean mayonnaise.', 25.00, 'Lämpimät Ruoat', '/images/chicken-bread.jpg', false),
  ('Oskarin Leipä', 'White bread with beef sirloin, choron sauce, shrimp, and asparagus.', 29.50, 'Lämpimät Ruoat', '/images/oskar-bread.jpg', false),
  
  -- Hampurilaiset (Burgers)
  ('Hampurilainen', 'Beef patty with lettuce and mayo. Includes French fries.', 14.00, 'Hampurilaiset', '/images/burger-classic.jpg', false),
  ('Juustohampurilainen', 'Beef patty with cheese, lettuce and mayo. Includes French fries.', 14.70, 'Hampurilaiset', '/images/burger-cheese.jpg', false),
  ('Ananashampurilainen', 'Beef patty with pineapple ring, lettuce and mayo. Includes French fries.', 14.70, 'Hampurilaiset', '/images/burger-pineapple.jpg', false),
  ('Munahampurilainen', 'Beef patty with fried egg, lettuce and mayo. Includes French fries.', 14.70, 'Hampurilaiset', '/images/burger-egg.jpg', false),
  ('Special-Hampurilainen', 'Two beef patties, bacon, egg, cheese, pineapple ring. Includes French fries.', 20.00, 'Hampurilaiset', '/images/burger-special.jpg', false),
  
  -- Pizzat (Pizzas)
  ('Tropicana', 'Ham and pineapple.', 14.00, 'Pizzat', '/images/pizza-tropicana.jpg', false),
  ('Bolognese', 'Minced meat.', 13.30, 'Pizzat', '/images/pizza-bolognese.jpg', false),
  ('Quatro Stagioni', 'Ham, mushrooms, shrimp, and tuna.', 14.80, 'Pizzat', '/images/pizza-quatro.jpg', false),
  ('Vegetariana', 'Bell pepper, asparagus, onion, tomato, and mushrooms.', 14.80, 'Pizzat', '/images/pizza-veggie.jpg', false),
  ('Meetvurstipizza', 'Salami.', 14.00, 'Pizzat', '/images/pizza-salami.jpg', false),
  ('Opera', 'Ham and tuna.', 14.00, 'Pizzat', '/images/pizza-opera.jpg', false),
  ('Opera Special', 'Ham, tuna, and salami.', 14.80, 'Pizzat', '/images/pizza-opera-special.jpg', false),
  ('Käskynkkä Special', 'Chicken, peach, blue cheese, and béarnaise sauce.', 14.80, 'Pizzat', '/images/pizza-special.jpg', false),
  ('Fantasia', 'Choose four toppings of your choice!', 14.80, 'Pizzat', '/images/pizza-fantasia.jpg', false),
  
  -- Jälkiruoat (Desserts)
  ('Mango-Melonijäätelöä ja Suklaakastiketta', 'Mango-melon ice cream with chocolate sauce.', 9.00, 'Jälkiruoat', '/images/dessert-mango.jpg', false),
  ('Mustikkakukkoa ja Vaniljajäätelöä', 'Blueberry crumble with vanilla ice cream.', 10.00, 'Jälkiruoat', '/images/dessert-blueberry.jpg', false),
  ('Ohukaiset', 'A full pan of Finnish pancakes with raspberry jam and whipped cream.', 10.50, 'Jälkiruoat', '/images/dessert-pancakes.jpg', false),
  
  -- Lapsille (For Children)
  ('Maistuva Jauhelihapihvi', 'Tasty beef patty with béarnaise sauce and French fries.', 10.80, 'Lapsille', '/images/kids-patty.jpg', false),
  ('Äidin Lihapullat', 'Mom''s meatballs with cream sauce and mashed potatoes.', 11.00, 'Lapsille', '/images/kids-meatballs.jpg', false),
  ('Herkkupihvi', 'Pork patty with pineapple ring and mashed potatoes.', 13.00, 'Lapsille', '/images/kids-pork.jpg', false),
  ('Nauravat Nakit', '"Smiling" sausages with mayonnaise and French fries.', 10.50, 'Lapsille', '/images/kids-sausages.jpg', false),
  ('Iso Lehtipihvi', 'Large thin beef sirloin with herb butter and French fries.', 15.30, 'Lapsille', '/images/kids-steak.jpg', false);