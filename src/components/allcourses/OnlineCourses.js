import React from "react";
import Title from "../common/title/Title";
import { online } from "../../dummydata";

const OnlineCourses = () => {
  return (
    <>
      <section className="online text-center">
        <div className="container">
          <Title subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box cursor-pointer hover:bg-icons shadow-xl bg-white py-7 px-5 transition ease-in duration-100 ">
                <div className="img w-[80px] h-[80px] m-auto relative">
                  <img
                    className="w-full h-full object-cover"
                    src={val.cover}
                    alt=""
                  />
                  <img
                    src={val.hoverCover}
                    alt=""
                    className="show hover:opacity-100  hover:absolute hover:top-0 hover:left-0 opacity-0 w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-bold text-xl my-5 mx-0 ">
                  {val.courseName}
                </h1>
                <span className="bg-white py-1 px-5 text-xs font-bold text-icons rounded">
                  {val.course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
