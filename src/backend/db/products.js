import { v4 as uuid } from "uuid";
export const products = [
  {
    _id: uuid(),
    name: "Green's Kitchen",
    email: "greenkitchen@hotmail.com",
    phone: "+91 9881771645",
    // originalPrice: 4600,
    // discount: 150,
    discountedPrice: 60,
    description: "Transparent, bright and evocative.",
    rating: 3,
    isBestseller: true,
    isTrending: false,
    images:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "Meaty Treats",
    email: "meaty@hotmail.com",
    phone: "+91 9821371645",
    originalPrice: 5600,
    discount: 200,
    discountedPrice: 50,
    description:
      "These Acrylic Paints are perfect to create textured effects, brush marks and palette knife impressions.",
    rating: 4.5,
    isBestseller: true,
    isTrending: false,
    images:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "The Garden Eats",
    email: "garden@hotmail.com",
    phone: "+91 8821371645",
    originalPrice: 4600,
    discount: 100,
    discountedPrice: 400,
    description:
      "Brush strokes give beautiful color effects ideal for calligraphy, graphic art, scrapbooks, freehand art etc.",
    rating: 4,
    isBestseller: false,
    isTrending: false,
    images:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    inStock: 10,
  },
  {
    _id: uuid(),
    name: "The Wing House",
    originalPrice: 3935,
    discount: 35,
    email: "wing@hotmail.com",
    phone: "+91 9021371645",
    discountedPrice: 300,
    description: "Features high-end oil pastels for professional artists",
    rating: 5,
    isBestseller: true,
    isTrending: false,
    images:
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "	Healthy Bites",
    originalPrice: 1600,
    email: "healthy@hotmail.com",
    phone: "+91 9431371645",
    discount: 100,
    discountedPrice: 100,
    description:
      "Camel oil pastels are smoother to use and richer, deeper in colour.",
    rating: 4,
    isBestseller: false,
    isTrending: false,
    images:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "Taj Restaurant",
    originalPrice: 600,
    discount: 100,
    email: "thetaj@hotmail.com",
    phone: "+91 8021371645",
    discountedPrice: 500,
    description:
      "Brush strokes give beautiful color effects ideal for calligraphy, graphic art, scrapbooks, freehand art etc.",
    rating: 3,
    isBestseller: false,
    isTrending: false,
    images:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    inStock: 10,
  },
];
