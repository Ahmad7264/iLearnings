import React from "react";
import { awrapper } from "../../dummydata";

const AWrapper = () => {
  return (
    <>
      <section className=" bg-image-2 bg-no-repeat bg-cover bg-center h-[30vh] text-white">
        <div className="container grid">
          {awrapper.map((val) => {
            return (
              <div className="flex py-16 px-0">
                <div className="img">
                  <img className=" mr-7" src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1 className=" text-3xl text-black">{val.data}</h1>
                  <h3 className=" text-xl text-icons font-bold">{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AWrapper;
