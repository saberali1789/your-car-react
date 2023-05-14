import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer-section grid-3">
        <div className="info-footer">
          <h3 className="secondary titles-footer your-car">
            <strong>Your</strong>Car
          </h3>
          <p className="text-footer">
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
            <br />
            <br /> we are dedicated to providing our customers with a
            first-class car buying, selling, and renting experience.
          </p>
        </div>
        <div className="info-footer">
          <h3 className="secondary titles-footer">News Letter</h3>
          <p className="text-footer news">
            Subscribe to our news letter for updates, news and exclusive offers
            <br />
            <br />
          </p>
          <input placeholder=" Email" />
          <button className="btn-footer">Subscribe</button>
        </div>
        <div className="info-footer">
          <h3 className="secondary titles-footer">Contact</h3>
          <p className="text-footer contact">
            2038 2nd Avenue,<br/> Las Vegas, United States
            <p>
              01444773421423
              <br />
              01477678449405
            </p>
            <p>info@YourCar.com</p>
          </p>
        </div>

      </section>
        <div className="end-footer">
        &copy;Copyright 2023. <strong>YourCar</strong> Allrights reserved
        </div>
    </div>
  );
};

export default Footer;
