import React from "react";

import './HeroSection.css'


const HeroSectio = () => {
  return (
    <div className="hero-container ">
    <div className="container">
      <navbar>
        <div>
          <h2 className="logo">YourCar</h2>
        </div>
        <div className="links">
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Cars</button>
          <button>Connact us</button>
          <button>Home</button>
        </div>
      </navbar>
      <div className="hero-text grid-2">
      <div></div>
      <div className="hero-sub-text">
        <h1>Find the perfect car for you at YourCar</h1>
        <h2>We offer a wide range of cars that cater to your needs and budget. Visit us today and drive amay with your dream car!</h2>
        <button>Discover </button>

      </div>

      </div>
    </div>
    </div>
  );
};

export default HeroSectio;
