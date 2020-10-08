import React from 'react'
import MainInterface from '../components/mainInterface/MainInterface'
import './root.css'
import Payment from '../components/payment/Payment'

export default function Root() {
    return(
        <div className='container'>
            <MainInterface/>
            <Payment />
        </div>
    )
}