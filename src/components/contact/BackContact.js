import React from "react";
import { useLocation } from "react-router-dom";

const BackContact = ({ title }) => {
  const location = useLocation();
  return (
    <>
      <section className=" text-center max-md:bg-right max-md:p-[50%] max-md:h-[80vh] bg-contact-i bg-cover absolute bg-fixed top-0 left-0 -z-10 w-full h-screen pt-72 pr-12 text-white overflow-hidden">
        <h2 className=" font-semibold  text-lg uppercase">
          Home / {location.pathname.split("/")[1]}
        </h2>
        <h1 className=" md:ml-0 text-[50px] md:text-[75px] font-bold text-white leading-none explore about text-center">
          {title}
        </h1>
      </section>
      <div className=" mt-[32%] max-md:h-[40vh]"></div>
    </>
  );
};

export default BackContact;
