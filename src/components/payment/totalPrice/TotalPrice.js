import React from "react";
import './totalPrice.css'

export default function TotalPrice() {
  return (
    <div className="totalPrice">
      <div className='totalPrice__block subtotal'>
        <p>Subtotal</p>
        <p>
          13<span>$</span>
        </p>
      </div>
      <div className='totalPrice__block discounts'>
        <p>Discounts</p>
        <p>
          13<span>$</span>
        </p>
      </div>
      <div className='totalPrice__block saleTax'>
        <p>Sale Tax</p>
        <p>
          13<span>$</span>
        </p>
      </div>
      <div className='totalPrice__block total'>
        <p>Total</p>
        <p>
          13<span>$</span>
        </p>
      </div>
    </div>
  );
}
