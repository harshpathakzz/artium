import React from "react";
import { ProductList } from "../../components/ProductList/ProductList";
import { useProducts } from "../../contexts/products-context";
import "./ProductsPage.css";

function ProductsPage() {
  const { products } = useProducts();

  return (
    <div className="products-screen">
      <ProductList products={products} />
    </div>
  );
}

export { ProductsPage };
