import React from "react";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";
import { useWishlist } from "../../contexts/wishlist-context";
import "./WishlistPage.css";

function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-screen">
      {wishlist.map((wishlistProduct) => (
        <WishlistCard key={wishlistProduct._id} product={wishlistProduct} />
      ))}
    </div>
  );
}

export { WishlistPage };
