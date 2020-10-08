import React from 'react'
import chocolate from './001-hot chocolate.png'
import CartItem from './cartItem/CartItem'
import './cart.css'

export default function Cart() {
    return(
        <div className='cart'>
            <CartItem src={chocolate} alt='chocolate' quantily={1} price={3.5} />
            <CartItem src={chocolate} alt='chocolate' quantily={1} price={31.5}  />
            <CartItem src={chocolate} alt='chocolate' quantily={1} price={3.5}  />
            <CartItem src={chocolate} alt='chocolate' quantily={1} price={3.5}  />
            <CartItem src={chocolate} alt='chocolate' quantily={1} price={3.5}  />
            <CartItem src={chocolate} alt='chocolate' quantily={1} price={3.5}  />

        </div>
    )
}