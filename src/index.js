import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, NavbarProvider } from "./frontend/contexts";
import { makeServer } from "./server";
import { ProductsProvider } from "./frontend/contexts/products-context";
import { CartProvider } from "./frontend/contexts/cart-context";
import { WishlistProvider } from "./frontend/contexts/wishlist-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NavbarProvider>
          <ProductsProvider>
            <WishlistProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </WishlistProvider>
          </ProductsProvider>
        </NavbarProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
