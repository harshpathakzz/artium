export const priceRangeFilter = (products, minPrice, maxPrice) => {
  return products.filter(
    ({ discountedPrice }) =>
      discountedPrice >= minPrice && discountedPrice <= maxPrice
  );
};
