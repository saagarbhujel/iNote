import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(true);

  const handdleHam = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      {/* FOR BIIGER DEVICES */}
      <nav className=" flex justify-between h-15 mx-w-[1240px] mx-auto px-4 bg-purple-900 text-white py-3 text-lg relative z-10 ">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">iNote</h1>
        <div className="nav-list">
          <ul className="hidden md:flex justify-center px-4 mr-16 gap-[4vw] uppercase">
            <Link to="/">
              <li className="hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline ">About</li>
            </Link>
            <Link to="/contact">
              <li className="hover:underline">Contact</li>
            </Link>
          </ul>
        </div>

        {/* FOR MOBILE */}

        <div onClick={handdleHam} className="flex  items-center md:hidden">
          {!mobileNav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        <div
          className={
            !mobileNav
              ? "nav-list fixed left-0 top-[60px] w-[60%] h-full z-0 border-r border-r-purple-900 bg-purple-200  ease-linear duration-300 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <ul className=" text-black uppercase text-center ">
            <Link to="/">
              <li className="p-4  hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="p-4 hover:underline ">About</li>
            </Link>
            <Link to="/contact">
              <li className="p-4  hover:underline ">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
