import React from "react";
import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="items shadow hover:bg-icons hover:text-white hover:cursor-pointer hover:opacity-100">
          <div className="img relative">
            <img className="w-full h-full" src={val.cover4} alt="" />
            <div className="overlay absolute bottom-0 z-10 flex flex-col p-5 transition ease-in duration-150 gap-1 opacity-0 rounded-sm text-center text-icons hover:opacity-100 ">
              <i className="fab fa-facebook-f icon bg-black hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
              <i className="fab fa-twitter icon bg-black hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
              <i className="fab fa-instagram icon  bg-black hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
              <i className="fa-brands fa-youtube icon bg-black hover:bg-icons hover:text-white cursor-pointer w-10 h-10 leading-10 rounded-3xl"></i>
            </div>
          </div>
          <div className="details p-8 items-center">
            <h2 className="font-bold text-xl transition ease-in duration-150">
              {val.name}
            </h2>
            <p className="text-base text-gray-500 mt-2 transition ease-in duration-150 hover:text-white">
              {val.work}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
