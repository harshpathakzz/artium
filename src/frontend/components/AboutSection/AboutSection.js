import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <>
      <div className="product-section">
        <div className="product-section-image">
          <img
            className="product-section-img section-img-one"
            src="assets/homeImageOne.png"
            alt="Oasis"
          />
        </div>
        <div className="product-section-info">
          <div className="product-section-info-heading">
            <h1 className="h1-48">
              NO MINIMUM ORDER <span className="hl-rose">QUANTITY</span>
            </h1>
            <h1>
              Don't worry even if you have only one product to order. We will{" "}
              <span className="hl-rose">deliver it.</span>
            </h1>
          </div>
          <Link to="/products" className="product-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
      </div>
      <div className="product-section">
        <div className="product-section-info">
          <div className="product-section-info-heading">
            <h1 className="h1-48">
              EASY <span className="hl-rose">RETURNS</span>
            </h1>
            <h1>
              Received a wrong or damaged product. We have
              <span className="hl-rose">your back.</span>
            </h1>
          </div>
          <Link to="/products" className="product-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
        <div className="product-section-image">
          <img
            className="product-section-img section-img-two"
            src="assets/homeImageTwo.png"
            alt="Oasis"
          />
        </div>
      </div>
      <div className="product-section">
        <div className="product-section-image">
          <img
            className="product-section-img section-img-three"
            src="assets/homeImageThree.png"
            alt="Oasis"
          />
        </div>
        <div className="product-section-info">
          <div className="product-section-info-heading">
            <h1 className="h1-48">
              EXPRESS DELIVERY <span className="hl-rose">and TRACKING</span>
            </h1>
            <h1>
              Artium ensures fast delivery of orders and best part is{" "}
              <span className="hl-rose">you can track it.</span>
            </h1>
          </div>
          <Link to="/products" className="product-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
      </div>
    </>
  );
};
