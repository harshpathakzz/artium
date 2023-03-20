import React from "react";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./CartProductCard.css";

const CartProductCard = ({ product }) => {
  const {
    _id,
    name,
    images,
    discountedPrice,
    email,
    phone,
    originalPrice,
    discount,
    qty,
  } = product;

  const { wishlist, moveProductToWishlist, removeProductFromWishlist } =
    useWishlist();
  const { removeProductFromCart, updateQuantityOfProductInCart } = useCart();

  return (
    <div className="card card-horizontal cart-card-horizontal">
      <div className="card-media">
        <img className="img-rsp" src={images} alt={name} />
      </div>
      <div className="card-info">
        <div className="card-primary">
          <h2 className="card-title">{name}</h2>
          <div className="card-price">
            <h6 className="card-price-discounted">Email : {email}</h6>
            {/* <small className="card-price-original">Phone : {phone}</small> */}
            <h6 className="card-price-discounted">Phone : {phone}</h6>
          </div>
        </div>
        <div className="card-actions cart-card-actions">
          <div className="card-action-buttons">
            <div className="quantity-action">
              <button className="btn btn-float cart-btn-float">
                {/* <span
                  className="material-icons"
                  onClick={() =>
                    qty === 1
                      ? removeProductFromCart(_id)
                      : updateQuantityOfProductInCart(_id, "decrement")
                  }
                >
                  remove
                </span> */}
              </button>
              {/* <span className="quantity">{qty}</span>
              <button className="btn btn-float cart-btn-float">
                <span
                  className="material-icons"
                  onClick={() =>
                    updateQuantityOfProductInCart(_id, "increment")
                  }
                >
                  add
                </span>
              </button> */}
            </div>
            {/* <button
              className="remove-action"
              onClick={() => removeProductFromCart(_id)}
            >
              Remove
            </button> */}
          </div>
          <div className="card-action-icons">
            {wishlist.find((wishlistProduct) => wishlistProduct._id === _id) ? (
              <button className="card-action-icon top-left">
                <span
                  className="material-icons favorite-icon"
                  onClick={() => removeProductFromWishlist(_id)}
                >
                  favorite
                </span>
              </button>
            ) : (
              <button
                className="card-action-icon top-left"
                onClick={() => moveProductToWishlist(product)}
              >
                <span className="material-icons"> favorite_border </span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="card-total-price">
        <p>Total Serving Capacity</p>
        <h3>Serving : {discountedPrice * qty}</h3>
      </div>
    </div>
  );
};

export { CartProductCard };
