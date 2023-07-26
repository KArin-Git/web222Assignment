/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // Product data for Chocolate
  {
    id: "choco1",
    title: "Creamy Milk Chocolate Bar",
    description: "Smooth and creamy milk chocolate bar for indulgence.",
    price: 799, // $7.99 per 100g
    discontinued: true,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco2",
    title: "Milk Chocolate Truffles",
    description: "Delicate milk chocolate truffles with a velvety center.",
    price: 1099, // $10.99 per 100g
    discontinued: false,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco3",
    title: "Hazelnut Milk Chocolate Pralines",
    description: "Decadent milk chocolate pralines filled with hazelnut cream.",
    price: 1299, // $12.99 per 100g
    discontinued: false,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco4",
    title: "Toffee Crunch Milk Chocolate",
    description: "Irresistible milk chocolate with a delightful toffee crunch.",
    price: 899, // $8.99 per 100g
    discontinued: false,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco5",
    title: "Milk Chocolate-covered Almonds",
    description: "Roasted almonds enrobed in luscious milk chocolate.",
    price: 999, // $9.99 per 100g
    discontinued: false,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco6",
    title: "Milk Chocolate Caramel Swirls",
    description: "Smooth milk chocolate with luscious caramel swirls.",
    price: 999, // $9.99 per 100g
    discontinued: false,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco7",
    title: "Intense Dark Chocolate Bar",
    description: "Rich and intense dark chocolate bar with bold cocoa flavors.",
    price: 899, // $8.99 per 100g
    discontinued: false,
    categories: ["ch2"] // Belongs to category "Dark Chocolate"
  },

  {
    id: "choco8",
    title: "Golden Marzipan Pralines",
    description: "Elegant marzipan pralines coated in luxurious golden chocolate.",
    price: 1499, // $14.99 per 100g
    discontinued: false,
    categories: ["ch3"] // Belongs to category "Luxury Chocolate"
  },

  {
    id: "choco9",
    title: "Zesty Orange Dark Chocolate",
    description: "Dark chocolate infused with zesty orange essence.",
    price: 1099, // $10.99 per 100g
    discontinued: false,
    categories: ["ch4"] // Belongs to category "Flavor Chocolate"
  },

  {
    id: "choco10",
    title: "Chili Infused Chocolate Discs",
    description: "Exotic dark chocolate discs with a hint of chili spice.",
    price: 1199, // $11.99 per 100g
    discontinued: true,
    categories: ["ch4"] // Belongs to category "Flavor Chocolate"
  },

  {
    id: "choco11",
    title: "Milk Chocolate Almond Bark",
    description: "Delightful milk chocolate with crunchy almond pieces.",
    price: 799, // $7.99 per 100g
    discontinued: false,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco12",
    title: "Milk Chocolate Mint Medallions",
    description: "Melt-in-your-mouth milk chocolate medallions with a refreshing mint twist.",
    price: 899, // $8.99 per 100g
    discontinued: true,
    categories: ["ch1", "ch4"] // Belongs to categories "Milk Chocolate" and "Flavor Chocolate"
  },

  {
    id: "choco13",
    title: "Silky Dark Chocolate Ganache",
    description: "Silky smooth dark chocolate ganache for pure indulgence.",
    price: 1199, // $11.99 per 100g
    discontinued: false,
    categories: ["ch2"] // Belongs to category "Dark Chocolate"
  },

  {
    id: "choco14",
    title: "Exotic Chocolate Bonbons",
    description: "Exquisite chocolate bonbons infused with rare flavor combinations.",
    price: 1599, // $15.99 per 100g
    discontinued: false,
    categories: ["ch3", "ch4"] // Belongs to categories "Luxury Chocolate" and "Flavor Chocolate"
  },

  {
    id: "choco15",
    title: "Passion Fruit Dark Chocolate",
    description: "Dark chocolate with a burst of tropical passion fruit essence.",
    price: 1099, // $10.99 per 100g
    discontinued: true,
    categories: ["ch4"] // Belongs to category "Flavor Chocolate"
  },

  {
    id: "choco16",
    title: "Milk Chocolate Hazelnut Spread",
    description: "Delicious milk chocolate spread enriched with hazelnuts.",
    price: 799, // $7.99 per 100g
    discontinued: false,
    categories: ["ch1"] // Belongs to category "Milk Chocolate"
  },

  {
    id: "choco17",
    title: "Marbled Chocolate Bars",
    description: "Artfully marbled milk and dark chocolate bars with a mesmerizing swirl.",
    price: 899, // $8.99 per 100g
    discontinued: false,
    categories: ["ch1", "ch2"] // Belongs to categories "Milk Chocolate" and "Dark Chocolate"
  },

  {
    id: "choco18",
    title: "Golden Raspberry Chocolate Squares",
    description: "Gourmet chocolate squares with golden raspberry filling.",
    price: 1299, // $12.99 per 100g
    discontinued: true,
    categories: ["ch3"] // Belongs to category "Luxury Chocolate"
  },

  {
    id: "choco19",
    title: "Cherry-Chili Dark Chocolate Bar",
    description: "Dark chocolate infused with sweet cherry and a touch of chili spice.",
    price: 1099, // $10.99 per 100g
    discontinued: false,
    categories: ["ch2", "ch4"] // Belongs to categories "Dark Chocolate" and "Flavor Chocolate"
  },

  {
    id: "choco20",
    title: "Coconut Toffee Chocolate Clusters",
    description: "Decadent clusters of milk chocolate, coconut, and buttery toffee bits.",
    price: 1299, // $12.99 per 100g
    discontinued: false,
    categories: ["ch4"] // Belongs to category "Flavor Chocolate"
  },

  {
    id: "choco21",
    title: "Royal Dark Truffles",
    description: "Decadent dark chocolate truffles infused with exotic spices.",
    price: 1799, // $17.99 per 100g
    discontinued: false,
    categories: ["ch2", "ch3"] // Belongs to categories "Luxury Chocolate" and "High-Mountain Tea"
  },

  {
    id: "choco22",
    title: "Caramel Sea Salt Pralines",
    description: "Handcrafted pralines with a perfect blend of caramel and sea salt.",
    price: 1499, // $14.99 per 100g
    discontinued: false,
    categories: ["ch4"] // Belongs to category "Luxury Chocolate"
  },

  {
    id: "choco23",
    title: "Ruby Chocolate Gems",
    description: "Rare and alluring pink ruby chocolate gems with a berry-like flavor.",
    price: 2199, // $21.99 per 100g
    discontinued: false,
    categories: ["ch3", "ch4"] // Belongs to categories "Luxury Chocolate" and "Fruit-Infused Chocolate"
  },

  {
    id: "choco24",
    title: "Golden Honey Nougat",
    description: "Exquisite nougat bars infused with golden honey and roasted almonds.",
    price: 1599, // $15.99 per 100g
    discontinued: false,
    categories: ["ch3", "ch4"] // Belongs to categories "Luxury Chocolate" and "Nutty Delights"
  },

  // Product data for Exotic Tea Emporium
  {
    id: "tea1",
    title: "Golden Dragon Pearl",
    description: "Hand-rolled Jasmine-scented green tea pearls.",
    price: 1599, // $15.99 per 100g
    discontinued: false,
    categories: ["ct1", "ct2"] // Belongs to categories "Green Tea" and "Herbal Tea"
  },

  {
    id: "tea2",
    title: "Himalayan White",
    description: "Delicate white tea from the Himalayas.",
    price: 1799, // $17.99 per 50g
    discontinued: false,
    categories: ["ct3", "ct4"] // Belongs to categories "White Tea" and "High-Mountain Tea"
  },

  {
    id: "tea3",
    title: "Gyokuro Imperial",
    description: "Highest grade Japanese green tea with a sweet taste.",
    price: 2099, // $20.99 per 50g
    discontinued: false,
    categories: ["ct1", "ct5"] // Belongs to categories "Green Tea" and "Japanese Tea"
  },

  {
    id: "tea4",
    title: "Golden Monkey",
    description: "Premium black tea with golden-tipped leaves.",
    price: 1399, // $13.99 per 50g
    discontinued: true, // This product is discontinued
    categories: ["ct4"] // Belongs to category "Luxury Tea"
  },

  {
    id: "tea5",
    title: "Oolong Beauty",
    description: "Elegant and floral oolong tea with a smooth finish.",
    price: 1899, // $18.99 per 50g
    discontinued: false,
    categories: ["ct3", "ct4"] // Belongs to categories "White Tea" and "Luxury Tea"
  },

  {
    id: "tea6",
    title: "Pu-erh Royal Reserve",
    description: "Aged and earthy pu-erh tea with rich complexity.",
    price: 2499, // $24.99 per 100g
    discontinued: false,
    categories: ["ct4"] // Belongs to category "Luxury Tea"
  },

  {
    id: "tea7",
    title: "Matcha Supreme",
    description: "Highest grade ceremonial matcha powder for traditional preparation.",
    price: 2999, // $29.99 per 30g
    discontinued: false,
    categories: ["ct1", "ct2"] // Belongs to categories "Japanese Tea" and "Herbal Tea"
  },

  {
    id: "tea8",
    title: "Honeybush Vanilla",
    description: "Naturally sweet and caffeine-free herbal tea with vanilla notes.",
    price: 1299, // $12.99 per 50g
    discontinued: false,
    categories: ["ct2"] // Belongs to category "Herbal Tea"
  }

  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
];
