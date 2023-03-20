import React from "react";
import { useCart } from "../../contexts/cart-context";
import "./CartSummary.css";

export const CartSummary = () => {
  const {
    cartSummary: {
      cartTotalProducts,
      cartTotalPrice,
      cartTotalDiscount,
      cartTotalAmount,
    },
  } = useCart();

  return (
    <div className="cart-checkout">
      <h2 className="h2">Order Summary</h2>
      <hr />
      <ul className="checkout-list list-style-none">
        <li className="checkout-list-item">
          {/* <span>Serving ({cartTotalProducts} items)</span> */}
          {/* <span className="checkout-price">₹{cartTotalPrice}</span> */}
        </li>
        <li className="checkout-list-item">
          {/* <span>Discount</span> */}
          {/* <span className="checkout-discount">- ₹{cartTotalDiscount}</span> */}
        </li>
        {/* <li className="checkout-list-item">
          <span>Delivery Charges</span>
          <span className="checkout-delivery">FREE</span>
        </li> */}
      </ul>
      <hr />
      <div className="checkout-amount">
        <h3>Total Quantity</h3>
        <p>{cartTotalAmount}</p>
      </div>
      <hr />
      <button className="btn btn-pink btn-checkout ">
        Proceed to Checkout
      </button>
    </div>
  );
};
