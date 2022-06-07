import { v4 as uuid } from "uuid";
export const products = [
  {
    _id: uuid(),
    name: "Water Colours By Primo",
    originalPrice: 600,
    discount: 150,
    discountedPrice: 450,
    description: "Transparent, bright and evocative.",
    rating: 3,
    isBestseller: true,
    isTrending: false,
    images:
      "https://cdn.shopify.com/s/files/1/0260/9384/6583/products/Water_colours_art_paper_PRIMO_ITALY_scooboo.jpg4_540x.jpg?v=1632566697",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "BRUSTRO Artists Acrylic Colours",
    originalPrice: 600,
    discount: 200,
    discountedPrice: 400,
    description:
      "These Acrylic Paints are perfect to create textured effects, brush marks and palette knife impressions.",
    rating: 4.5,
    isBestseller: true,
    isTrending: false,
    images:
      "https://cdn.shopify.com/s/files/1/0260/9384/6583/products/brustro-artists-acrylic-colours-366926_540x.jpg?v=1641550126",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "SAKURA PIGMA BRUSH PEN SET OF 24 ASSORTED COLOURS",
    originalPrice: 600,
    discount: 100,
    discountedPrice: 500,
    description:
      "Brush strokes give beautiful color effects ideal for calligraphy, graphic art, scrapbooks, freehand art etc.",
    rating: 4,
    isBestseller: false,
    isTrending: false,
    images:
      "https://cdn.shopify.com/s/files/1/0260/9384/6583/products/sakura-pigma-brush-pen-calligraphy-br-8-original-scooboo-ball-pen-tombow-india-stationery-art-craft-online_540x.jpg?v=1622439034",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "Mungyo Gallery Artist Soft Oil Pastel",
    originalPrice: 935,
    discount: 35,
    discountedPrice: 900,
    description: "Features high-end oil pastels for professional artists",
    rating: 5,
    isBestseller: true,
    isTrending: false,
    images:
      "https://cdn.shopify.com/s/files/1/0260/9384/6583/products/mungyo-gallery-artist-soft-oil-pastel-24-shadesoil-pastelsmungyoscooboo-mopv-248804819124023-173844_540x.jpg?v=1647441659",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "CAMEL OIL PASTELS",
    originalPrice: 600,
    discount: 100,
    discountedPrice: 500,
    description:
      "Camel oil pastels are smoother to use and richer, deeper in colour.",
    rating: 4,
    isBestseller: false,
    isTrending: false,
    images:
      "https://cdn.shopify.com/s/files/1/0260/9384/6583/products/camel-oil-pastels-490424_540x.jpg?v=1641550180",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "Chalk Paint Marker",
    originalPrice: 100,
    discount: 20,
    discountedPrice: 80,
    description:
      "Water based marker with rounded tip of 2,5 mm. Odourless with high pigmentation. For every kind of surfaces and decorations.",
    rating: 2,
    isBestseller: false,
    isTrending: false,
    images:
      "https://cdn.shopify.com/s/files/1/0260/9384/6583/products/chalk-paint-marker-122044_540x.jpg?v=1641550249",
    inStock: 10,
  },
  {
    _id: uuid(),
    name: "SAKURA PIGMA BRUSH PEN SET OF 12 ASSORTED COLOURS",
    originalPrice: 600,
    discount: 100,
    discountedPrice: 500,
    description:
      "Brush strokes give beautiful color effects ideal for calligraphy, graphic art, scrapbooks, freehand art etc.",
    rating: 3,
    isBestseller: false,
    isTrending: false,
    images:
      "https://cdn.shopify.com/s/files/1/0260/9384/6583/products/sakura-pigma-brush-pen-calligraphy-br-8-original-scooboo-ball-pen-tombow-india-stationery-art-craft-online_540x.jpg?v=1622439034",
    inStock: 10,
  },
];
