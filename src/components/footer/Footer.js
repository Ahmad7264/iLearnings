import React from "react";
import { blog } from "../../dummydata";

const Footer = () => {
  return (
    <>
      <section className="newletter bg-icons py-12 px-10 mt-8 text-white">
        <div className="container flexSB flex py-0  justify-between">
          <div className="left row pr-12 ">
            <h1 className=" text-white text-3xl font-bold mb-4 font-serif">
              iLearnings - Stay tune and get the latest update
            </h1>
            <span className=" font-serif">India Ka Learning Platform</span>
          </div>
          <div className="right row pr-12 flex justify-between items-center">
            <input
              className="w-full text-black p-5 border-none outline-none h-8"
              type="text"
              placeholder="Enter email address"
            />
            <i className="fa fa-paper-plane p-3 text-icons bg-white"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding ">
          <div className="box logo text-icons text-sm  ">
            <h1 className="ml-2">iLearnings</h1>
            <span className=" text-icons text-sm ml-2 font-bold ">
              ONLINE EDUCATION & LEARNING
            </span>
            <p className=" text-black mt-7 mb-8 mr-4 ml-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <i className="fab fa-facebook-f icon bg-icons text-white py-3 rounded-3xl px-3 cursor-pointer mr-4 ml-4"></i>
            <i className="fab fa-twitter icon bg-icons text-white py-3 px-3 rounded-3xl  cursor-pointer mr-4"></i>
            <i className="fab fa-instagram icon bg-icons text-white py-3 px-3 rounded-3xl cursor-pointer mr-4"></i>
          </div>
          <div className="box link ">
            <h3 className="mb-10 font-bold">Explore</h3>
            <ul className="mb-5">
              <li className="mb-5 cursor-pointer">About Us</li>
              <li className="mb-5 cursor-pointer">Services</li>
              <li className="mb-5 cursor-pointer">Courses</li>
              <li className="mb-5 cursor-pointer">Blog</li>
              <li className="mb-5 cursor-pointer">Contact us</li>
            </ul>
          </div>
          <div className="box link ">
            <h3 className="mb-10 font-bold">Quick Links</h3>
            <ul className="mb-5 ">
              <li className="mb-5 cursor-pointer">Contact Us</li>
              <li className="mb-5 cursor-pointer">Pricing</li>
              <li className="mb-5 cursor-pointer">Terms & Conditions</li>
              <li className="mb-5 cursor-pointer">Privacy</li>
              <li className="mb-5 cursor-pointer">Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3 className="mb-10 font-bold">Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB flex justify-between mb-7 cursor-pointer">
                <div className="img">
                  <img
                    className="w-12 h-12 rounded mr-2 object-cover bg-black"
                    src={val.cover}
                    alt=""
                  />
                </div>
                <div className="text">
                  <span className=" text-sm text-icons mr-1 capitalize">
                    <i className="fa fa-calendar-alt text-sm text-icons mr-1 capitalize"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span className="text-sm text-icons mr-1 capitalize">
                    <i className="fa fa-user text-sm text-icons mr-1 capitalize"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4 className="font-[400] mt-2">
                    {val.title.slice(0, 40)}...
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3 className=" mb-10 font-bold">Have a Questions?</h3>
            <ul className=" mb-12 ">
              <li className=" mb-12">
                <i className="fa fa-map w-10 text-xl text-icons"></i>
                203 lake Road, Pune, Maharastra, India
              </li>
              <li className="mb-12">
                <i className="fa fa-phone-alt w-10 text-xl text-icons"></i>
                +916354621088
              </li>
              <li className="mb-12">
                <i className="fa fa-paper-plane w-10  text-xl text-icons"></i>
                info@iLearnings.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal text-center py-5 px-0 my-5  bg-[#b9b9b9a5]">
        <p className="text-lg">
          Copyright ©2022 All rights reserved | This template is made with
          <i className="fa fa-heart text-icons"></i> by MOHD DILSHAD
        </p>
      </div>
    </>
  );
};

export default Footer;
