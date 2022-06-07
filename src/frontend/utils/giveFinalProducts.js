import { giveProductsInPriceRange } from "./giveProductsInPriceRange";
import { giveProductsOfRating } from "./giveProductsOfRating";
import { giveProductsSorted } from "./giveProductsSorted";

export const giveFinalProducts = (products, filters) => {
  const { minPrice, maxPrice, sortBy, rating } = filters;
  const productsInPriceRange = giveProductsInPriceRange(
    products,
    minPrice,
    maxPrice
  );

  const productsSorted = giveProductsSorted(productsInPriceRange, sortBy);

  const productsOfRating = giveProductsOfRating(productsSorted, rating);

  return productsOfRating;
};
