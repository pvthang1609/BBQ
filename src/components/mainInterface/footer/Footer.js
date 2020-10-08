import React from 'react'
import WristbandInfo from './user/WristbandInfor'

import './footer.css'
import Promotions from './promotions/Promotions.js'

export default function Footer() {
    return(
        <div className='footer'>
            <WristbandInfo />
            <Promotions />
        </div>
    )
}