import React from "react";
import "./Cars.css";
import car1 from "../components/img/image3.png";

const Cars = () => {
  return (
    <div>
      <section className="cars-section ">
        <div className="cars-titles">
          <h1 className="blur car-blur">CARS</h1>
          <h2 className="cars-title">Cars</h2>
        </div>
        <div className="">
          <div className="cards-box container">
            <div className="cars-card">
              <img src={car1} alt=""></img>
              <h3 className="secondary">BUSINESS CLASS</h3>
              <p className="car-kind"> Merhlfdhlh</p>
              <p className="car-info">
                The BMW 7 Series is the ultimate luxury car, offering
                unparalleled comfort, style, and technology. With its sleek
                exterior and spacious interior, this four-door sedan is perfect
                for those who demand the very best in automotive design and
                performance.
              </p>
              <div className="card-footer">
                <div className="seats">
                  <p>5 Seats</p>
                  <p>2 Luggage</p>
                </div>
                <div className="btns">
                  <button className="decrease tow-btns">-</button>
                  <p className="">0</p>
                  <button className="increase tow-btns">+</button>
                </div>
              </div>
            </div>
         
         








          </div>
        </div>
      </section>
    </div>
  );
};

export default Cars;
