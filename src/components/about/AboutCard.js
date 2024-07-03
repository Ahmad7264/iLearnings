import React from "react";

import { homeAbout } from "../../dummydata";
import AWrapper from "./AWrapper";
import Title from "../common/title/Title";

const AboutCard = () => {
  return (
    <>
      <section className=" h-auto">
        <div className="flexSB">
          <Title
            subtitle="LEARN ANYTHING "
            title="Benefits About Online Learning Expertise"
          />

          <div className="left overflow-hidden">
            <img
              className=" w-[700px] h-[400px] ml-72 object-cover"
              src="./image/Habt.gif"
              alt=""
            />
          </div>
          <div className=" py-20 px-12">
            <div className=" mt-12">
              {homeAbout.map((val) => {
                return (
                  <div className=" bg-white mt-3 p-5 transition ease-in duration-700 hover:bg-icons hover:text-white ">
                    <div className=" flex  justify-center">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className=" font-bold">
                      <h2 className=" flex justify-center text-xl">
                        {val.title}
                      </h2>
                      <p className=" flex justify-center">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Title title="Ours Story Global Reach  " />
          <Title title="In One Year " />
          <div className="left overflow-hidden">
            <img
              className=" w-[900px] h-[500px] ml-48 object-cover"
              src="./image/global.jpg"
              alt=""
            />
          </div>
          <Title title="India Ka Learning" />
          <Title title="Platform" />
        </div>
        <div className="left overflow-hidden">
          <img
            className="w-[900px] h-[500px] ml-48 object-cover mb-6"
            src="./image/impact.jpg"
            alt=""
          />
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
