import React, { memo } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { useStateValue } from "../../components/context/Index.jsx";
import '../../hook/useFetch.jsx'
import { Link } from "react-router-dom";
const Product = ({ data, title }) => {
  console.log(data);
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div
      className=" w-290px] rounded-lg  flex flex-col justify-between p-3 mb-7 relative"
      key={product.id}
    >
      <button className="flex absolute right-2 top-2"> <IoHeartOutline onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: product }) } className="text-[30px]"/></button>
      <p className="pl-3 pb-2 w-14 bg-green-400 text-white rounded-tl-[15px] rounded-br-[20px]  absolute top-0 left-0">new</p>
      <div className="w-full  h-60">
        <Link to={`/product/${product.id}`}>
          <img className="w-full h-full object-contain duration-300 hover:scale-105" src={product.images[0]} alt="Photo"/>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-green-300 select-none"><b className=" font-medium text-gray-500">BY:</b>{product.title}</p>
        <div className="flex gap-3 items-center">
          <LiaStarSolid className="text-[yellow]" />
          
          <p>({product.rating})</p>
        </div>
        <div className="flex justify-between">
          <b className="text-green-400 text-2xl">{product.price} USD <del className="text-gray-400">$ - 53</del> </b>
          <button className="  flex items-center p-3 rounded-2xl font-bold bg-green-200  text-green-500 " onClick={() => { 
            dispatch({ type: "CART", payload: product });}} >
            <PiShoppingCartLight className="text-[25px] " />Add
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <div className="grid items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items}
      </div>
    </div>
  );
};

export default memo(Product);
