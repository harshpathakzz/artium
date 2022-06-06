import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <div className="hero-title">
          <h1 className="h1-60">
            Shop with <span className="hl-rose">Artium</span>
          </h1>
          <h1 className="h1-60">
            Be your own <span className="hl-rose">Artist!</span>
          </h1>
        </div>
        <div className="hero-subtitle">
          <p>
            Artium is a registered brand of Creativehands, boasts of becoming
            people's choice by providing the highest quality products at
            feasible rates for artists.
          </p>
        </div>
        <button className="btn btn-link btn-pink">
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
