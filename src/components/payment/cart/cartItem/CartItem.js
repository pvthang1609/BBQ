import React from "react";
import "./cartItem.css";

export default function CartItem({ src, quantily, alt, price }) {
  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img src={src} alt={alt} />
      </div>
      <div className='cartItem__quantilyBlock'>
        <button className="cartItem__decreaseBtn">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <p className="cartItem__quantily">{quantily}</p>
        <button className="cartItem__increaseBtn">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <p className="cartItem__price">
        {price}
        <span>$</span>
      </p>
    </div>
  );
}
