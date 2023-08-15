import React from 'react'
import './Companies.css'
import equinix from '../../images/equinix.png'
import realty from '../../images/realty.png';
import prologis from '../../images/prologis.png';
import tower from '../../images/tower.png';

const Companies = () => {
  return (
   <section className='c-wrapper'>
    <div className='paddings innerWidth flexCenter c-container'>
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
    </div>
   </section>
  )
}

export default Companies
