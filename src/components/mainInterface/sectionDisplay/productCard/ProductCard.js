import React from "react";
import "./productCard.css";
import sashimi from "../source/png-food/001-sashimi.png";

export default function ProductCard() {
  return (
    <div className="productCard">
      <div className="productCard__image">
        <img src={sashimi} alt="sashimi" />
      </div>
      <div className="productCard__mainContent">
        <p className="productCard__mainContent--nameProduct">Food</p>
        <div className="productCard__mainContent--descProduct">
          <p>Good for healthy</p>
        </div>
        <p className="productCard__mainContent--price">
          Price: <span>5.4$</span>
        </p>
        <button className="productCard__mainContent--addButton">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
