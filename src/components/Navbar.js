import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbarO">
      <div>
        <h2 className="logo">YourCar</h2>
      </div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Cars</button>
        <button>Connact us</button>
        
      </div><button className="cart-icon" onClick={props.toggle}>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>{props.list}</p>
        </button>
      <div className="icon" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
