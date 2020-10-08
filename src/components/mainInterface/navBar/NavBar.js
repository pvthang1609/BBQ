import React from "react";
import NavItem from "./NavItem";

import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBar__list">
        <li className="navBar__item">
          <NavItem to="/" exact={true}>All Items</NavItem>
        </li>
        <li className="navBar__item">
          <NavItem to="/food">Food</NavItem>
        </li>
        <li className="navBar__item">
          <NavItem to="/alcohol">Alcohol</NavItem>
        </li>
        <li className="navBar__item">
          <NavItem to="/cool-drinks">Cool Drinks</NavItem>
        </li>
        <li className="navBar__item">
          <NavItem to="/hot-drinks">Hot Drinks</NavItem>
        </li>
      </ul>
    </nav>
  );
}
