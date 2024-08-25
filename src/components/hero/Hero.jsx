import React, {memo} from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import photo from "../../assets/hero.jpg"
import { MdOutlineSend } from "react-icons/md";
import "./Hero.scss"
import Delivery from "../delivery/Delivery";


const Hero = () => {

  return (
    <div className="container mx-auto mt-12">
      <div className="relative items-center justify-center mb-28 hero">
            <img className="w-full img" src={photo} alt="" />
            <div className="absolute flex flex-col sm:gap-3  md:gap-5 sm:h-[300px] left-16 sm:top-1 gap-8  lg:top-8 w-1/2">
              <div className="title">
                <b className="sm:text-5xl  font-mono md:text-6xl lg:text-6xl text-zinc-800">Fresh Vegetables Big discount</b>
                <p className=" sm:text-5xl text-gray-500 md:text-4xl lg:text-3xl">Save up to 50% off on your first order</p>
              </div>
              <div className="hero__wrapper">
                    <div className="hero__input">
                    <IoPaperPlaneOutline className='hero__icon' />
                    <input type="text" placeholder= "Your emaill address"/>
                    </div>
                    <button>Subscribe</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default memo (Hero)
