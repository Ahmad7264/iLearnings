import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Title from "../common/title/Title";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  return (
    <React.Fragment>
      <section className="homeAbout">
        <div className="container">
          <Title
            subtitle="our courses"
            title="explore our popular online courses"
          />
          <div className="coursesCard py-12 px-0">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val) => (
                <div className="items bg-white p-[30px] text-center">
                  <div className="content flex">
                    <div className="left">
                      <div className="img w-20 h-20 rounded-full bg-icons p-4">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text text ml-4 text-left">
                      <h1 className=" text-2xl font-bold">{val.coursesName}</h1>
                      <div className="rate my-5 mx-0">
                        <i className="text-lg mr-1 fa fa-star"></i>
                        <i className="text-lg mr-1 fa fa-star"></i>
                        <i className="text-lg mr-1 fa fa-star"></i>
                        <i className="text-lg mr-1 fa fa-star"></i>
                        <i className="text-lg mr-1 fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <>
                            <div className="box flex items-center text-gray-500">
                              <div className="dimg">
                                <img
                                  className="mr-5 w-20 h-20 rounded-full"
                                  src={details.dcover}
                                  alt=""
                                />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span className="text-icons font-bold text-lg items-center">
                              {details.totalTime}
                            </span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price my-7 mx-0 bg-slate-300 p-5">
                    <h3 className="font-bold text-icons">
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className="outline-btn m-0 shadow-none border-2 border-solid border-icons w-full h-14 hover:bg-icons hover:text-white transition  ease-in duration-500">
                    ENROLL NOW !
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </React.Fragment>
  );
};

export default HAbout;
