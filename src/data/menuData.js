export const menuCategories = ["Starters", "Main Course", "Breads & Rice"];

export const sampleMenuItems = [
  {
    id: "m1",
    name: "Paneer Tikka",
    category: "Starters",
    price: 220,
    rating: 4.9,
    ordersCount: "1.2k+ orders",
    description: "Soft paneer cubes marinated with aromatic spices and grilled to perfection in a clay tandoor with roasted bell peppers and onions.",
    isVeg: true,
    isBestseller: true,
    image: "/Paneer Tikka Charcoal.jpg",
    availableAddons: [
      { id: "a1", name: "Extra Paneer (4 pcs)", price: 50 },
      { id: "a2", name: "Extra Butter Dip", price: 20 },
      { id: "a3", name: "Spicy Mint Chutney", price: 15 },
      { id: "a4", name: "Tandoori Salad Bowl", price: 35 }
    ]
  },
  {
    id: "m2",
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 240,
    rating: 4.8,
    ordersCount: "2.4k+ orders",
    description: "Creamy tomato-based gravy with soft paneer and aromatic Indian spices, finished with a luscious swirl of fresh churned cream.",
    isVeg: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    availableAddons: [
      { id: "a5", name: "Extra Butter Dollop", price: 25 },
      { id: "a6", name: "Garlic Butter Naan", price: 60 },
      { id: "a7", name: "Extra Paneer Cubes", price: 50 },
      { id: "a8", name: "Roasted Papad (2 pcs)", price: 20 }
    ]
  },
  {
    id: "m3",
    name: "Royal Dum Biryani",
    category: "Breads & Rice",
    price: 280,
    rating: 4.9,
    ordersCount: "3.1k+ orders",
    description: "Fragrant aged long-grain basmati rice slow-cooked on dum with marinated vegetables, saffron streaks, and caramelized golden onions.",
    isVeg: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    availableAddons: [
      { id: "a9", name: "Burani Garlic Raita", price: 30 },
      { id: "a10", name: "Extra Salan Gravy", price: 35 },
      { id: "a11", name: "Roasted Cashews Garnish", price: 40 }
    ]
  },
  {
    id: "m4",
    name: "Dal Makhani Heritage",
    category: "Main Course",
    price: 210,
    rating: 4.7,
    ordersCount: "1.8k+ orders",
    description: "Slow-cooked black lentils simmered overnight over charcoal with churned butter, whole spices, and sun-ripened tomatoes.",
    isVeg: true,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    availableAddons: [
      { id: "a12", name: "White Butter Topping", price: 20 },
      { id: "a13", name: "Butter Tandoori Roti (2 pcs)", price: 45 },
      { id: "a14", name: "Pickled Sirka Onions", price: 15 }
    ]
  }
];
