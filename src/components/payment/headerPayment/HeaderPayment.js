import React from 'react'
import './headerPayment.css'

export default function HeaderPayment() {
    return(
        <div className='headerPayment'>
            <p className='headerPayment__title'>Current Order</p>
            <button className='headerPayment__clearBtn'>Clear All</button>
            <button className='headerPayment__settingBtn'><i class="fa fa-cog" aria-hidden="true"></i></button>
        </div>
    )
}