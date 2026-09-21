export const portfolioCategories = [
  { id: "All", label: "All Work", count: 6 },
  { id: "Digital Menu", label: "QR & Print Menu", count: 2 },
  { id: "Food Photography", label: "Food Photos", count: 1 },
  { id: "Zomato", label: "Zomato Setup", count: 1 },
  { id: "Swiggy", label: "Swiggy Add-ons", count: 1 },
  { id: "Combos", label: "Menu Combos", count: 1 }
];

export const portfolioProjects = [
  {
    id: "p1",
    title: "Royal Dine — Modern QR & Print Menu",
    category: "Digital Menu",
    badge: "QR & Dine-in Menu",
    client: "Family Restaurant",
    image: "/menu2.jpg",
    accentColor: "amber",
    tagline: "Clear food categories & fast phone ordering",
    simpleDescription: "Restructured a messy 80-item menu into clear categories with appetite-inducing descriptions, pure veg/non-veg tags, and instant QR code ordering.",
    ownerBenefit: "Waiters spend less time taking orders; tables clear and turn over 2x faster.",
    customerBenefit: "Clear prices, dietary marks, and zero wait time to browse items.",
    resultMetric: "2x Faster Table Turnover",
    shortOutcome: "Order in < 4 mins",
    resultDetail: "Average customer ordering time dropped from 12 mins to under 4 mins with 38% more beverage add-ons.",
    tags: ["Mobile QR Menu", "Veg / Non-Veg Marks", "Clear Pricing"],
    stats: [
      { label: "Ordering Speed", value: "< 4 mins" },
      { label: "Drink Add-ons", value: "+38%" },
      { label: "Rating", value: "4.8 ★" }
    ]
  },
  {
    id: "p2",
    title: "Charcoal Flavors — 4K Dish Photography",
    category: "Food Photography",
    badge: "HD Food Visuals",
    client: "Tandoori Kitchen",
    image: "/Paneer Tikka Charcoal.jpg",
    accentColor: "rose",
    tagline: "Mouthwatering photos that drive online orders",
    simpleDescription: "Captured sizzling, high-resolution food shots of tikkas, curries, and breads formatted perfectly for Zomato, Swiggy, and social media ads.",
    ownerBenefit: "Online delivery profile looks 10x more premium, converting casual browsers into paying customers.",
    customerBenefit: "Guests see real, appetizing food before ordering with zero doubt.",
    resultMetric: "+45% Order Conversion",
    shortOutcome: "12K+ monthly views",
    resultDetail: "Direct delivery order conversion increased by 45% within 30 days of publishing real dish photos.",
    tags: ["4K Food Shots", "Delivery App Formats", "Appetite Lighting"],
    stats: [
      { label: "Clicks to Orders", value: "+45%" },
      { label: "Dish Views", value: "12K+ /mo" },
      { label: "Repeat Rate", value: "34%" }
    ]
  },
  {
    id: "p3",
    title: "Urban Bistro — Zomato Catalog & Badging",
    category: "Zomato",
    badge: "Zomato Setup",
    client: "Cafe & Bistro",
    image: "/menu.jpg",
    accentColor: "red",
    tagline: "Top-ranked bestsellers & zero error rate",
    simpleDescription: "Configured top-selling pizzas and shakes at prime top slots, set up Half/Full portion variants, and added clean preparation tags.",
    ownerBenefit: "Zero wrong order complaints, no confusion over portion sizes, and higher rank in local search.",
    customerBenefit: "Easy to filter favorites, select sizes with 1 tap, and customize spice levels.",
    resultMetric: "0% Order Errors",
    shortOutcome: "Top 3 Local Rank",
    resultDetail: "Wrong size order complaints dropped to 0%, saving refund losses and kitchen remake time.",
    tags: ["Zomato Sync", "Bestseller Badges", "Portion Sizes"],
    stats: [
      { label: "Local Rank", value: "Top 3" },
      { label: "Error Rate", value: "0%" },
      { label: "Repeat Buyers", value: "+28%" }
    ]
  },
  {
    id: "p4",
    title: "Green Bowl — Swiggy Modifiers & Add-ons",
    category: "Swiggy",
    badge: "Swiggy Customizer",
    client: "Salad & Bowls Bar",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    accentColor: "orange",
    tagline: "Smart add-on steps that boost average bill size",
    simpleDescription: "Engineered smooth step-by-step Swiggy modifiers allowing guests to customize bowl bases, dressings, and add extra paneer/toppings effortlessly.",
    ownerBenefit: "Automatically collects extra ₹30-₹60 per order without needing extra staff or ad spend.",
    customerBenefit: "Total flexibility over meal ingredients, dressing choices, and portions.",
    resultMetric: "+₹65 Average Bill Value",
    shortOutcome: "68% Add-on Attach",
    resultDetail: "68% of customers chose at least two paid add-on ingredients during checkout.",
    tags: ["Custom Modifiers", "Smart Add-ons", "Dietary Tags"],
    stats: [
      { label: "Avg Bill Boost", value: "+₹65" },
      { label: "Attach Rate", value: "68%" },
      { label: "Monthly Bowls", value: "1.4K+" }
    ]
  },
  {
    id: "p5",
    title: "Biryani Darbar — High-Margin Meal Combos",
    category: "Combos",
    badge: "Meal Combos",
    client: "Biryani House",
    image: "/Biryani_Combo.jpg",
    accentColor: "emerald",
    tagline: "Satisfying combo meals that sell out fast",
    simpleDescription: "Engineered single & family meal packages (Biryani + Raita + Kebab + Dessert) with mouthwatering promotional banners.",
    ownerBenefit: "Kitchen packs pre-planned combos in half the time; lunch profit margin increased by 22%.",
    customerBenefit: "Full meal with drink and dessert in one click with great savings.",
    resultMetric: "+22% Profit Margin",
    shortOutcome: "58% Lunch Share",
    resultDetail: "Combos became 58% of all weekday lunch orders with 5 minutes saved per kitchen prep.",
    tags: ["Thali Combos", "High Margin", "Fast Packing"],
    stats: [
      { label: "Lunch Share", value: "58%" },
      { label: "Margin Growth", value: "+22%" },
      { label: "Prep Saved", value: "5 mins" }
    ]
  },
  {
    id: "p6",
    title: "Crust & Craft — Pizza Menu & Social Kit",
    category: "Digital Menu",
    badge: "Branding & Menu",
    client: "Italian Pizzeria",
    image: "/Pizza.jpg",
    accentColor: "purple",
    tagline: "Stylish menu aesthetics & engaging social creatives",
    simpleDescription: "Created an elegant wood-fired pizza menu layout paired with weekend party offers and matching social media templates.",
    ownerBenefit: "Professional brand appeal drives more dine-in footfall, birthday inquiries, and table bookings.",
    customerBenefit: "Clear visual guide to pizza crusts, signature sauces, and drink pairings.",
    resultMetric: "3x Table Reservations",
    shortOutcome: "45K+ Reach",
    resultDetail: "Weekend table reservations and group dining inquiries tripled within 60 days.",
    tags: ["Visual Layout", "Social Creatives", "Party Offers"],
    stats: [
      { label: "Table Bookings", value: "3x Growth" },
      { label: "Reach", value: "45K+" },
      { label: "Avg Spend", value: "₹850" }
    ]
  }
];
