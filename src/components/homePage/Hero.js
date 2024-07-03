import React from "react";
import Title from "../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className=" max-md:bg-right max-md:p-[50%] max-md:h-[80vh] bg-hero-pattern bg-cover absolute bg-fixed top-0 left-0 -z-10 w-full h-screen pt-60 pr-12 text-white overflow-hidden">
        <div className=" w-4/5 m-auto">
          <div className=" w-1/2 ml-24">
            <Title
              subtitle="WELCOME TO ILEARNINGS "
              title="Best Online Education"
            />

            <div className=" flex justify-between ">
              <button className="btn py-4 px-8 mt-7 mr-3 mb-0 ml-0  primary-btn bg-white text-icons font-bold border-none rounded shadow-xl">
                GET STARTED NOW! <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="py-4 px-8 mt-7 mr-28 mb-0 ml-0  primary-btn bg-icons text-white font-bold border-none rounded cursor-pointer shadow-xl primary-btn">
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className=" m-[40.3%] max-md:h-[40vh]"></div>
    </>
  );
};

export default Hero;
