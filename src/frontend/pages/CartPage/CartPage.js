import React from "react";
import { CartProductCard } from "../../components/CartProductCard/CartProductCard";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { useCart } from "../../contexts/cart-context";
import "./CartPage.css";

function CartPage() {
  const { cart } = useCart();

  return (
    <div className="cart-screen">
      <div className="cart-products">
        {cart.map((cartProduct) => (
          <CartProductCard key={cartProduct._id} product={cartProduct} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}

export { CartPage };
