import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useCart } from "../../contexts/cart-context";
import { Rating } from "../Rating/Rating";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    originalPrice,
    discount,
    discountedPrice,
    rating,
    images,
    isBestseller,
    isTrending,
  } = product;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { auth } = useAuth();

  const { cart, addProductToCart } = useCart();

  return (
    <div
      className={
        pathname === "/products"
          ? "product-listing-card card card-vertical"
          : "card card-vertical"
      }
    >
      <div className="card-primary">
        <h2 className="card-title">{name}</h2>
      </div>
      <Rating rating={rating} />
      <div className="card-price">
        <h4 className="card-price-discounted">₹{discountedPrice}</h4>
        <small className="card-price-original">₹{originalPrice}</small>
        <span className="card-discount">{discount}% Off</span>
      </div>
      <div className="card-actions">
        <div className="card-action-buttons">
          {cart.find((cartProduct) => cartProduct._id === _id) ? (
            <button
              className="btn btn-icon btn-pink btn-card"
              onClick={() => navigate("/cart")}
            >
              <span className="material-icons">shopping_cart</span>
              Go To Cart
            </button>
          ) : (
            <button
              className="btn btn-primary-sloid btn-pink btn-card"
              onClick={() =>
                auth.status ? addProductToCart(product) : navigate("/signin")
              }
            >
              Add To Cart
            </button>
          )}
        </div>
        <div className="card-action-icons">
          <button className="card-action-icon">
            <span className="material-icons"> share </span>
          </button>
        </div>
      </div>
      {isBestseller && (
        <div className="card-badge bestseller hl">Bestseller</div>
      )}
      {isTrending && <div className="card-badge trending hl">Trending</div>}
    </div>
  );
};

export { ProductCard };
