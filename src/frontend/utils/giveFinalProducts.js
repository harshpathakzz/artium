import { priceRangeFilter } from "./priceRangeFilter";
import { ratingFilter } from "./ratingFilter";
import { sortingFilter } from "./sortingFilter";

export const giveFinalProducts = (products, filters) => {
  const { minPrice, maxPrice, sortBy, rating } = filters;
  const productsInPriceRange = priceRangeFilter(products, minPrice, maxPrice);

  const productsSorted = sortingFilter(productsInPriceRange, sortBy);

  const productsOfRating = ratingFilter(productsSorted, rating);

  return productsOfRating;
};
