import React, { memo } from "react";
import photo1 from "../../assets/img1.svg";
import photo2 from "../../assets/img2 (2).png";
import photo3 from "../../assets/img 1.png";
import photo4 from "../../assets/img2.png";
import photo5 from "../../assets/img3.png";
import photo6 from "../../assets/img4.png";
import photo7 from "../../assets/img5.png";
import photo8 from "../../assets/img6.png";
import photo9 from "../../assets/img7.png";
import photo10 from "../../assets/img8.png";
import img11 from "../../assets/banner-1.png.png";
import img12 from "../../assets/banner-2.png.png";
import img13 from "../../assets/banner-3.png.png";
import './Types.scss'

const Types = () => {
  return (
    <div className="container mx-auto">
        <div className="flex items-center gap-2">
          <h2 className=" text-2xl font-bold">Featured Categories</h2>
          <p className=" items-center hover:text-green-400 cursor-pointer pt-1">
            Cake & Milk
          </p>
          <p className=" items-center hover:text-green-400 cursor-pointer pt-1">
            Coffes & Teas
          </p>
          <p className=" items-center hover:text-green-400 cursor-pointer pt-1">
            Pet Foods
          </p>
          <p className=" items-center hover:text-green-400 cursor-pointer pt-1">
            Vegetables
          </p>
        </div>
      <div className="types">
          <div className="flex types__cards  rounded-2xl items-center justify-center pt-5 flex-col bg-lime-100">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo1}
              alt=""
            />
            <b>Cake & Milk</b>
            <p className="text-gray-500">26 items</p>
          </div>
          <div className="flex   types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-red-100">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo2}
              alt=""
            />
            <b>Oganic Kiwi</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex  types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-blue-100">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo3}
              alt=""
            />
            <b>Snack</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex  types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-slate-100">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo4}
              alt=""
            />
            <b>Vegetables</b>
            <p className="text-gray-500">58 items</p>
          </div>
          <div className="flex  types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-purple-100 transition-all">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo5}
              alt=""
            />
            <b>Strawberry</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex types__cards rounded-2xl items-center justify-center flex-col pt-5 bg-yellow-100 transition-all">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo6}
              alt=""
            />
            <b>Black plum</b>
            <p className="text-gray-500">32 items</p>
          </div>
          <div className="flex  types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-green-100 transition-all">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo7}
              alt=""
            />
            <b>Custard apple</b>
            <p className="text-gray-500">21 items</p>
          </div>
          <div className="flex types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-purple-100 transition-all">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo8}
              alt=""
            />
            <b>Coffe & Tea</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex  types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-yellow-100 transition-all">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo9}
              alt=""
            />
            <b>Custard apple</b>
            <p className="text-gray-500">28 items</p>
          </div>
          <div className="flex  types__cards  rounded-2xl items-center justify-center flex-col pt-5 bg-pink-100 transition-all">
            <img
              className="mb-4 hover:scale-105 cursor-pointer transition-all"
              src={photo10}
              alt=""
            />
            <b>Coffe & Tea</b>
            <p className="text-gray-500">28 items</p>
          </div>
      </div>

      <div className="types__box mb-14">
        <div className="types__card relative">
          <img src={img11} alt="" />
          <div className=" types__desc flex flex-col  gap- md:top-4 absolute w-1/2 left-10 lg:top-12">
            <p className="text-2xl sm:text-2xl   md:text-base lg:text-2xl  ">
              Everyday Fresh & Clean with Our Products
            </p>
            <button className="p-2 bg-green-600 w-24 rounded-2xl text-white">
              shop now
            </button>
          </div>
        </div>
        <div className="types__card relative">
          <img src={img12} alt="" />
          <div className=" types__desc flex flex-col gap-4 md:top-4 absolute w-1/2 left-10 lg:top-12">
            <p className="sm:text-2xl   md:text-base lg:text-2xl   ">
              Everyday Fresh & Clean with Our Products
            </p>
            <button className="p-2 bg-green-600 w-24 rounded-2xl text-white">
              shop now
            </button>
          </div>
        </div>
        <div className="types__card relative  shadow-[10px 10px 0 0 rgb(231,234,243) ]">
          <img src={img13} alt="" />
          <div className=" types__desc  flex flex-col gap-4 md:top-4 absolute w-1/2 left-10 lg:top-12">
            <p className="sm:text-2xl   md:text-base lg:text-2xl">
              Everyday Fresh & Clean with Our Products
            </p>
            <button className="p-2 bg-green-600 w-24 rounded-2xl text-white">
              shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Types);
