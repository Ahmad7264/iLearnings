import React from "react";

const Title = ({ subtitle, title }) => {
  return (
    <>
      <div className=" text-center py-8">
        <h3 className=" text-black font-bold tracking-widest  uppercase font-serif">
          {subtitle}
        </h3>
        <h1 className="md:ml-0 text-[50px] md:text-[75px]  items-center font-bold text-white leading-none explore text-center ">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
