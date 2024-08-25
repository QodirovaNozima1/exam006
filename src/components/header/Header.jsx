import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import axios from "../../api/Index";
const Hader = () => {
  const [ setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex items-center  gap-[69px] justify-between ">
          <Link to={"/"}>
            <img className="sm:flex-none" src={logo} alt="" />
          </Link>
          <div className="border hidden gap-2 w-[40%] py-[10px] lg:flex rounded-[5px]">
            <select
              className="border-none outline-none text-[14px] font-[700] text-[#253D4E] pl-2"
              name=""
              id=""
            >
              <option value="">All Categories</option>
            </select>
            <hr className="w-[1px] h-[20px] bg-[#eee]" />
            <div className="relative hidden sm:block">
              <input
                className="border-none outline-none w-[60%] pl-2 text-[14px]"
                type="text"
                placeholder="Search for items..."
              />
            </div>
            <button>
              <CiSearch />
            </button>
          </div>

          <div className=" rounded-[5px] border hidden gap-3 py-[6px] px-[8px] sm:flex md:flex lg:flex ">
            <button>
              <CiLocationOn />
            </button>
            <select
              className="border-none outline-none text-[14px] text-[#3BB77E]  "
              name=""
              id=""
            >
              <option value="">Your Location</option>
              <option value="">Toshkent</option>
              <option value="">Jizzax</option>
              <option value="">Navoiy</option>
              <option value="">Fargona</option>
            </select>
          </div>
          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
              <div className="flex items-center gap-1">
                <CiHeart className="text-[24px] " />
                <NavLink
                  className=
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                >Wishlist
                </NavLink>
              </div>
              <div className="flex items-center gap-1 navbar__collection">
                <IoCartOutline className="text-[24px] " />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/Cart"}
                >
                  Cart
                </NavLink>
              </div>
              <div className="flex items-center gap-1">
                <IoPersonOutline className="text-[24px] " />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] navbar__collection"
                  }
                  to={"/login"}
                >
                  Account
                </NavLink>
              </div>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu text-5xl">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hader;