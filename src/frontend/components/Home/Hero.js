import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <div className="hero-title">
          <h1 className="h1-60">
            Delivering <span className="hl-green">Plants</span>
          </h1>
          <h1 className="h1-60">
            Delivering <span className="hl-green">Delight!</span>
          </h1>
        </div>
        <div className="hero-subtitle">
          <p>
            Shop your favorite plants in your favorable factor, air-purifiers,
            pet-friendly, succulents, herbs, and more...
          </p>
        </div>
        <button className="btn btn-link btn-teal">
          <Link className="hero-link" to="/products">
            Shop Now
            <span className="material-icons"> chevron_right </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export { Hero };
