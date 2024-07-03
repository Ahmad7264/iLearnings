import React from "react";
import Head from "./Head";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Head />
      <header className=" bg-header-rgba justify-center mt-0 mb-0 ml-5 mr-10 sticky top-0">
        <nav className="flex justify-between sticky top-0 ">
          <div className=" md:flex md:pl-0">
            <ul className=" flex py-8 px-5 ">
              <li className="px-5 text-black  tracking-widest font-bold ease-in hover:text-icons transition duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className=" ml-1 px-5 text-black font-bold ease-in hover:text-icons transition duration-200">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="px-5 text-black font-bold ease-in hover:text-icons transition duration-200">
                <Link to="/about">About Us</Link>
              </li>
              <li className="px-5 text-black font-bold ease-in hover:text-icons transition duration-200">
                <Link to="/team">Team</Link>
              </li>
              <li className="px-5 text-black font-bold ease-in hover:text-icons transition duration-200">
                <Link to="/services">Services</Link>
              </li>
              <li className="px-5 text-black font-bold ease-in hover:text-icons transition duration-200">
                <Link to="/contactUs">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className=" bg-icons py-8 px-5 flex justify-end clip-style text-white ">
            <div className="button">GET CERTIFICATE</div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
