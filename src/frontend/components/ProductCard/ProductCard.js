import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { Rating } from "../Rating/Rating";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    originalPrice,
    discount,
    discountedPrice,
    images,
    isBestseller,
    isTrending,
  } = product;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { auth } = useAuth();
  const { wishlist, moveProductToWishlist, removeProductFromWishlist } =
    useWishlist();
  const { cart, addProductToCart } = useCart();

  return (
    <div
      className={
        pathname === "/products"
          ? "product-listing-card card card-vertical"
          : "card card-vertical"
      }
    >
      <img src={images} alt={name} className="card-media" />
      <div className="card-primary">
        <h2 className="card-title">{name}</h2>
      </div>
      {/* <Rating rating={rating} /> */}
      <div className="card-price">
        <h4 className="card-price-discounted">
          No. of serving : {discountedPrice}
        </h4>
        {/* <small className="card-price-original">₹{originalPrice}</small> */}
        {/* <span className="card-discount">Rs {discount} Off</span> */}
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
              Message
            </button>
          )}
        </div>
        <div className="card-action-icons">
          {wishlist.find((wishlistProduct) => wishlistProduct._id === _id) ? (
            <button
              className="card-action-icon top-right"
              onClick={() => removeProductFromWishlist(product._id)}
            >
              <span className="material-icons favorite-icon"> favorite </span>
            </button>
          ) : (
            <button
              className="card-action-icon top-right"
              onClick={() => {
                if (auth.status) {
                  moveProductToWishlist(product);
                } else {
                  navigate("/signin");
                }
              }}
            >
              <span className="material-icons"> favorite_border </span>
            </button>
          )}
        </div>
      </div>
      {isBestseller && <div className="card-badge bestseller hl">non-veg</div>}
      {isTrending && <div className="card-badge trending hl">veg</div>}
    </div>
  );
};

export { ProductCard };
