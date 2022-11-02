import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  return (
    <div className="container relative px-12 py-4 shadow-lg flex items-center justify-around md:px-4 md:justify-between ">
      <div>
        <Link to="/">
          <h1 className="font-fOxygen text-4xl font-semibold cursor-pointer text-black">
            Y<span className="text-[#8BC2D7]">OUR</span>S.
          </h1>
        </Link>
      </div>
      <div className="md:hidden">
        <ul className="flex items-center text-xl font-Heebo font-semibold gap-4">
          <Link to="/">
            <li
              className="hover:border-b-2 cursor-pointer hover:border-b-[#8BC2D7] hover:transition 
            hover:duration-800 hover:ease-in-out"
            >
              HOME
            </li>
          </Link>
          <li
            className="hover:border-b-2 cursor-pointer hover:border-b-[#8BC2D7] hover:transition 
            hover:duration-800 hover:ease-in-out"
          >
            PRODUCTS
          </li>
          <li
            className="hover:border-b-2 cursor-pointer hover:border-b-[#8BC2D7] hover:transition 
            hover:duration-800 hover:ease-in-out"
          >
            ABOUT
          </li>
          <li
            className="hover:border-b-2 cursor-pointer hover:border-b-[#8BC2D7] hover:transition 
            hover:duration-800 hover:ease-in-out"
          >
            CONTACT
          </li>
        </ul>
      </div>
      {isOpen ? null : (
        <div className="hidden absolute z-50  shadow-2xl rounded-lg h-[220px] w-[150px] md:flex md:top-[90px]">
          <ul className="flex flex-col text-xl ml-2 items-start font-Heebo font-semibold">
            <Link to="/">
              <li className=" cursor-pointer my-3 border-b-2 border-b-black border-opacity-20 w-full ">
                HOME
              </li>
            </Link>
            <li className=" cursor-pointer my-3 border-b-2 border-b-black border-opacity-20 w-full">
              PRODUCTS
            </li>
            <li className=" cursor-pointer my-3 border-b-2 border-b-black border-opacity-20 w-full">
              ABOUT
            </li>
            <li className="cursor-pointer my-3 border-b-2 border-b-black border-opacity-20 w-full">
              CONTACT
            </li>
          </ul>
        </div>
      )}

      <div className="flex items-center relative cursor-pointer md:hidden text-xl gap-2">
        <i className="ri-search-line"></i>
        <Link to="/login">
          <i className="ri-user-3-line"></i>
        </Link>

        <i className="ri-heart-2-line"></i>
        <Link to="/cart">
          <i className="ri-shopping-basket-line"></i>
        </Link>
        {user.user ? (
          <div className="flex gap items-center gap-2">
            <h1 className="text-lg font-semibold font-Heebo">{user.user}</h1>
            <Link
              to="/login"
              onClick={() => {
                setInterval(() => {
                  navigate("/");
                  localStorage.clear();
                  location.reload();
                }, 2000);
              }}
            >
              <i class="ri-logout-box-r-line text-sm"></i>
            </Link>
          </div>
        ) : null}
      </div>
      {isOpen ? (
        <i
          onClick={() => setIsOpen(!isOpen)}
          className="ri-menu-line cursor-pointer text-3xl hidden md:flex"
        ></i>
      ) : (
        <i
          onClick={() => setIsOpen(!isOpen)}
          class="ri-close-line cursor-pointer text-3xl hidden md:flex"
        ></i>
      )}
    </div>
  );
};

export default Navbar;
