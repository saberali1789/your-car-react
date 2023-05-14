import React from "react";
import "./Testimonial.css";
import car4 from "../components/img/car4.png";

const Testimonial = () => {
  return (
    <div>
      <section className="test-section">
        <div className="test-titles">
          <h1 className="blur test-blur">TESTIMONIALS</h1>
          <h2 className="test-title">Testimonial</h2>
        </div>
        <div className="test-box">
          <p className="test-text">
            I recently bought a car through YourCar and I was blown away by
            their exceptional service. The staff were friendly and
            knowledgeable, and they helped me find the perfect car for my needs.
            I highly recommend YourCar to anyone looking for a luxury car buying
            experience.
          </p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <div className="reviewer-box">
            <p className="reviewer-name">Annie Rudy</p>
            <p className="reviewer-city">Las vegas</p>
          </div>
          <div></div>
          <img className="car-test" src={car4} alt="--" />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
