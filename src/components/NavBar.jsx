import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className=" bg-purple-900 text-white py-3 text-lg ">
        <ul className=" flex justify-end px-4 mr-16">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li className=" mx-5">About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default NavBar
