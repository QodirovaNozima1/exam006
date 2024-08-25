import React from "react";
import photo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex items-center justify-center mt-6">
      <div className="flex items-center justify-center w-[400px] gap-6 flex-col mt-7 border p-5 rounded-[5px] ">
        <img src={photo} alt="" />
        <form className="flex items-start justify-start flex-col p-5 rounded-3xl  gap-4">
          <label className="text-[15px] text-[#444444]" htmlFor="">
            Email Address*
          </label>
          <input
            className="shadow-sm border outline-none border-spacing-1 rounded-[5px] p-2 w-[338px] pl-2"
            type="text"
            placeholder="Enter your Email"
          />
          <label className="text-[15px] text-[#444444]" htmlFor="">
            Password*
          </label>
          <input
            className="shadow-sm border outline-none border-spacing-1 rounded-[5px] p-2 w-[338px] pl-2"
            type="password"
            required
            placeholder="Enter your password"
          />
          <div className="flex justify-between items-center gap-[100px]">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p className="text-[15px] text-[#444444]">Remember Me</p>
            </div>
            <p className="text-[15px] text-[#444444]">Forgot Password?</p>
          </div>
          <div className="flex justify-between items-center gap-[194px]">
            <NavLink to={"/admin"}>
              <button
                type="Log in"
                required
                className="w-[80px] h-[40px] text-[14px] text-[#fff] bg-[#3BB77E] rounded-[5px]"
                onClick={() => navigate("/admin")}
              >
                Сохранить
              </button>
            </NavLink>
            <button
              className=" text-[16px] text-[#444444]"
              onClick={() => navigate("/")}
            >
              Sing in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
