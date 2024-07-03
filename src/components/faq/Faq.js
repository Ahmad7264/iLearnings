import React, { useState } from "react";
import { faq } from "../../dummydata";
import Title from "../common/title/Title";

const Faq = () => {
  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <Title subtitle="FAQS" title="Frequesntly Ask Question" />
      <section className="faq flex justify-center">
        <div className="container  max-w-[70%]">
          {faq.map((val, index) => (
            <div className="box bg-white mb-5">
              <button
                className="accordion p-0 m-0 flex justify-between w-full py-4 px-5 hover:bg-icons hover:text-white"
                onClick={() => toggle(index)}
                key={index}
              >
                <h2 className="font-bold hover:text-white">{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className="text">
                  <p className=" p-5">{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
