import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import photo from '../../assets/komonavt.png'

const Manage = () => {
  return (
    <div className="w-full bg-white h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
      <div className="items-center justify-center text-center text-4xl m-auto">
        <img src={photo }alt="" />
      </div>
        <b>Nozima Qodirova</b>
        <p>
          <b>99-000-00-00</b>
        </p>
      </div>
    </div>
  );
};

export default Manage;