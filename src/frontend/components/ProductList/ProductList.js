import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          className="product-listing-card"
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export { ProductList };
