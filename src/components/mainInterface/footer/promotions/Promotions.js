import React from 'react'
import Promotion from '../../../UI/Promotion'
import './promotions.css'

export default function Promotions() {
    return(
        <div className='promotions'>
            <p className='promotions__heading'>Select available promo to apply <span>(limit 1 per oder)</span></p>
            <div className='promotions__block'>
                <Promotion>
                    5$ off any item
                </Promotion>
                <Promotion>
                    free Beverage
                </Promotion>
                <Promotion>
                    20% off entire order
                </Promotion>
            </div>
        </div>
    )
}