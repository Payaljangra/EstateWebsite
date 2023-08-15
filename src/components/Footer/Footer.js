import React from 'react'
import logo from './../../images/logo2.png';
import './Footer.css'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
const Footer = () => {
  return (
     <div className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>

            {/* left side */}
            <div className='flexColStart f-left'>
                <img src={logo} alt='' width={120}/>
                <span className='secondaryText'>
                    Our vision is to make all people <br/>
                    The best place to live for them.
                </span>
            </div>

            {/* right side */}
            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, FL 4571,USA</span>

                <div className='flexCenter f-menu'>
                    <span className='ftr'>Property</span>
                    <span className='ftr'>Services</span>
                    <span className='ftr'>Product</span>
                    <span className='ftr'>About Us</span>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Footer
