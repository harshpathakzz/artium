import "./Homepage.css";
import React from "react";
import { Hero } from "../../components/Home/Hero";
import { AboutSection } from "../../components/AboutSection/AboutSection";

function HomePage() {
  return (
    <div className="home-screen">
      <Hero />
      <div class="secondary-section">
        <AboutSection />
      </div>
    </div>
  );
}

export { HomePage };
