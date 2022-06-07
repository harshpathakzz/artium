import React from "react";
import { Filters } from "../../components/Filters/Filters";
import { ProductList } from "../../components/ProductList/ProductList";
import { useFilters } from "../../contexts/filters-context";
import { useProducts } from "../../contexts/products-context";
import { giveFinalProducts } from "../../utils/giveFinalProducts";
import "./ProductsPage.css";

function ProductsPage() {
  const { products } = useProducts();
  const { filters } = useFilters();
  const finalProducts = giveFinalProducts(products, filters);
  return (
    <div className="products-screen">
      <Filters />
      <ProductList products={finalProducts} />
    </div>
  );
}

export { ProductsPage };
