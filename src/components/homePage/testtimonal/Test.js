import React from "react";
import { testimonal } from "../../../dummydata";
import Title from "../../common/title/Title";

const Test = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Title subtitle="TESTIMONIAL" title="Our Successful Students" />

          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow p-8 transition ease-in duration-150 hover:bg-icons hover:text-white hover:cursor-pointer">
                <div className="box flex">
                  <div className="img relative">
                    <img
                      className="w-24 h-24 rounded-full bg-slate-50"
                      src={val.cover}
                      alt=""
                    />
                    <i className="fa fa-quote-left absolute bottom-0 left-[65px]  text-black rounded-xl w-6 h-6 items-center"></i>
                  </div>
                  <div className="name m-6">
                    <h2 className=" text-xl mb-1">{val.name}</h2>
                    <span className=" text-black ">{val.post}</span>
                  </div>
                </div>
                <p className=" mt-5 text-gray-300 transition ease-in duration-150">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
