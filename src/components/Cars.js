import { useEffect, useState, useRef } from "react";
import "./Cars.css";
import car1 from "../components/img/image3.png";
import { motion } from "framer-motion";
import "./Cart.css";

const Cars = ({ carsData }) => {
  const cardRef = useRef();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(cardRef.current.scrollWidth - cardRef.current.offsetWidth);
  });

  console.log(width);

  return (
    <div>
      <section className="cars-section ">
        <div className="cars-titles">
          <h1 className="blur car-blur">CARS</h1>
          <h2 className="cars-title">Cars</h2>
        </div>
        <motion.div ref={cardRef} className="over-car container">
          <motion.div
            className="cards-box "
            drag="x"
            dragConstraints={{ right: 100, left: -width }}
          >
            {carsData.map((car) => {
              return (
                <motion.div className="cars-card">
                  <div className="img-box">
                    <img src={car.image} alt=""></img>
                  </div>
                  <h3 className="secondary">{car.name}</h3>
                  <p className="car-kind"> {car.class}</p>
                  <p className="car-info">{car.description}</p>
                  <div className="card-footer">
                    <div className="seats">
                      <p>{car.seats} Seats</p>
                      <p>{car.luggags} Luggage</p>
                    </div>
                    <div className="btns">
                      <button className="decrease tow-btns">-</button>
                      <p className="">0</p>
                      <button className="increase tow-btns">+</button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        <div className="cart">
          <div className="item-cart">
            <div className="text-cart">
              <h3 className="secondary cart-title">SUV</h3>
              <p className="car-kind cart-class">hfhfhh</p>
            <div className="btns-cart">
              <button className="decrease-cart tow-btns-cart ">-</button>
              <p className="">0</p>
              <button className="increase-cart tow-btns-cart">+</button>
            </div>
            </div>
            <div className="img-cart">
              <img src={car1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cars;
