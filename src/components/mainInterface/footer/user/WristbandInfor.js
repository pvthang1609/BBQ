import React from 'react'
import './wristbandInfo.css'
import woman from './woman.png'

export default function WristbandInfo() {
    return(
        <div className='wristbandInfo'>
            <p className='wristbandInfo__heading'>Wristband Infomation</p>
            <div className='wristbandInfo__content'>
                <div className='wristbandInfo__content--user'>
                    <div className='wristbandInfo__content--userAvatar'>
                        <img src={woman} alt='woman'/>
                    </div>
                    <div>
                        <p className='wristbandInfo__content--userName'>Eleanor Russell</p>
                        <div className='wristbandInfo__content--typeUser'>vip ticket holder</div>
                    </div>
                </div>
                <button className='wristbandInfo__content--button'>Unlink</button>
            </div>
        </div>
    )
}