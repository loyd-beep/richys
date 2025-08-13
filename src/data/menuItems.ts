import { MenuItemType } from '../types/menu';
export const burgers: MenuItemType[] = [{
  id: 'burger-1',
  name: 'The Classic Royale',
  description: 'Premium Angus beef patty, melted cheddar, fresh lettuce, tomato, and our signature sauce on a toasted brioche bun.',
  price: 12.99,
  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899',
  tags: ['Bestseller', 'Premium']
}, {
  id: 'burger-2',
  name: 'Truffle Mushroom Deluxe',
  description: 'Wagyu beef patty topped with sautéed wild mushrooms, truffle aioli, and Gruyère cheese.',
  price: 16.99,
  image: 'https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?q=80&w=1964',
  tags: ['Premium', 'New']
}, {
  id: 'burger-3',
  name: 'Smoky BBQ Stack',
  description: 'Double beef patties, crispy bacon, caramelized onions, and smoky BBQ sauce with melted smoked gouda.',
  price: 15.99,
  image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1768',
  featured: true
}];
export const sandwiches: MenuItemType[] = [{
  id: 'sandwich-1',
  name: 'Grilled Chicken Club',
  description: 'Herb-marinated grilled chicken breast with avocado, bacon, lettuce, and garlic aioli on toasted ciabatta.',
  price: 11.99,
  image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?q=80&w=1770',
  tags: ['Healthy', 'Popular']
}, {
  id: 'sandwich-2',
  name: 'Prime Steak Sandwich',
  description: 'Thinly sliced prime steak, caramelized onions, arugula, and horseradish cream on a toasted baguette.',
  price: 14.99,
  image: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1888',
  tags: ['Premium']
}, {
  id: 'sandwich-3',
  name: 'Mediterranean Veggie',
  description: 'Grilled vegetables, feta cheese, hummus, and olive tapenade on artisan bread.',
  price: 10.99,
  image: 'https://images.unsplash.com/photo-1539252554860-e7f7b0c588da?q=80&w=1964',
  tags: ['Vegetarian']
}];
export const pizzas: MenuItemType[] = [{
  id: 'pizza-1',
  name: 'Truffle Prosciutto',
  description: 'Thin crust topped with truffle cream, mozzarella, prosciutto di parma, arugula, and parmesan shavings.',
  price: 18.99,
  image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935',
  tags: ['Premium', 'Signature']
}, {
  id: 'pizza-2',
  name: 'Four Cheese Delight',
  description: 'Mozzarella, gorgonzola, fontina, and parmesan cheeses with a garlic olive oil base.',
  price: 16.99,
  image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1925',
  tags: ['Vegetarian']
}, {
  id: 'pizza-3',
  name: 'Spicy Pepperoni Supreme',
  description: 'San Marzano tomato sauce, mozzarella, spicy pepperoni, jalapeños, and honey drizzle.',
  price: 17.99,
  image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1780',
  featured: true
}];
export const desserts: MenuItemType[] = [{
  id: 'dessert-1',
  name: 'Molten Chocolate Lava Cake',
  description: 'Warm chocolate cake with a liquid center, served with vanilla bean ice cream and raspberry coulis.',
  price: 9.99,
  image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1887',
  tags: ['Bestseller']
}, {
  id: 'dessert-2',
  name: 'New York Cheesecake',
  description: 'Creamy classic cheesecake with a graham cracker crust, topped with seasonal berry compote.',
  price: 8.99,
  image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1770',
  tags: ['Classic']
}, {
  id: 'dessert-3',
  name: 'Tiramisu',
  description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
  price: 8.99,
  image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1887'
}];
export const drinks: MenuItemType[] = [{
  id: 'drink-1',
  name: 'Signature Craft Soda',
  description: 'House-made fruit-infused sodas in various flavors: blackberry sage, blood orange, or ginger lime.',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1857',
  tags: ['Signature']
}, {
  id: 'drink-2',
  name: 'Cold Brew Coffee',
  description: 'Smooth, slow-steeped cold brew coffee served over ice with your choice of flavored syrup.',
  price: 5.99,
  image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1887'
}, {
  id: 'drink-3',
  name: 'Artisanal Milkshake',
  description: 'Premium ice cream blended with your choice of flavor: vanilla bean, dark chocolate, or salted caramel.',
  price: 7.99,
  image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1887',
  tags: ['Premium']
}];
export const addOns: MenuItemType[] = [{
  id: 'addon-1',
  name: 'Truffle Fries',
  description: 'Crispy shoestring fries tossed in truffle oil and parmesan cheese.',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1639744093378-f44934976e4d?q=80&w=1887',
  tags: ['Popular']
}, {
  id: 'addon-2',
  name: 'Gourmet Onion Rings',
  description: 'Beer-battered onion rings served with smoked paprika aioli.',
  price: 5.99,
  image: 'https://images.unsplash.com/photo-1639667851375-86de55224ebd?q=80&w=2070'
}, {
  id: 'addon-3',
  name: 'Garlic Parmesan Knots',
  description: 'Freshly baked bread knots brushed with garlic butter and sprinkled with parmesan.',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=1887'
}];
export const offers: MenuItemType[] = [{
  id: 'offer-1',
  name: 'Date Night Special',
  description: 'Two premium burgers, one shared appetizer, two sides, and two craft sodas.',
  price: 39.99,
  image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1770',
  tags: ['Value', 'Special']
}, {
  id: 'offer-2',
  name: 'Family Feast',
  description: 'Choice of two large pizzas, one large side, and four drinks. Perfect for sharing!',
  price: 49.99,
  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1774',
  tags: ['Family', 'Value']
}, {
  id: 'offer-3',
  name: 'Weekday Lunch Deal',
  description: 'Any sandwich or burger with fries and a drink. Available Monday-Friday, 11am-3pm.',
  price: 14.99,
  image: 'https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1770',
  tags: ['Lunch', 'Value']
}];