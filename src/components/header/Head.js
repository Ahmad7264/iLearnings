import React from "react";

const Head = () => {
  return (
    <div>
      <section className=" py-5 text-black">
        <div className="max-w-[85%] m-auto flex justify-between">
          <div>
            <h1 className=" text-4xl font-black">iLearnings</h1>
            <span>INDIA KA LEARNING PLATFORM</span>
          </div>
          <div className="  space-x-3 rounded-sm text-center text-icons ">
            <i className="fa-brands fa-facebook bg-black-rgba hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
            <i className="fa-brands fa-instagram bg-black-rgba  hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
            <i className="fa-brands fa-x-twitter bg-black-rgba  hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
            <i className="fa-brands fa-youtube bg-black-rgba hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
