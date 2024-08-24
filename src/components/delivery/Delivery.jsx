import React from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";
import photo from "../../assets/banner-9.png.png"
import './Delivery.scss'

const Delivery = () => {
  return (
    <div className="delivery">
        <div className='container'>
        <div className="delivery__box">
            <div className="delivery__daily">
                <h2>Stay home & get your daily
                needs from our shop</h2>
                <p>Start You'r Daily Shopping with Nest Mart</p>
                <div className="delivery__wrapper">
                    <div className="delivery__input">
                    <IoPaperPlaneOutline className='delivery__icon' />
                    <input type="text" placeholder= "Your emaill address"/>
                    </div>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="delivery__photo">
                <img src={photo} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Delivery