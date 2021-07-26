import React from "react";
import { Link } from 'react-router-dom';
import {faShoppingBasket, faTruck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
      <Link to="/" className="navbar-brand text-warning mx-5"><FontAwesomeIcon  icon={faTruck} /> Food order</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mx-5">
            <li className="nav-item">
            <Link to="/Orders" className="nav-link active text-warning" aria-current="page"><FontAwesomeIcon  icon={faShoppingBasket} /> Your Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
