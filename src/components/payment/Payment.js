import React from 'react'
import Cart from './cart/Cart'
import HeaderPayment from './headerPayment/HeaderPayment'
import Pay from './pay/Pay'
import './payment.css'
import TotalPrice from './totalPrice/TotalPrice'

export default function payment() {
    return(
        <div className='payment'>
            <HeaderPayment />
            <Cart />
            <TotalPrice />
            <Pay />
        </div>
    )
}