import React from "react";
import Title from "../common/title/Title";

const ServicesCard = () => {
  return (
    <>
      <section className=" h-auto">
        <div>
          <Title subtitle="iLearnings" title="Unlock Success" />
          <Title title="With Our Dynamic Services." />
          <div className=" overflow-hidden">
            <img
              className=" w-[700px] h-[350px] ml-72 object-cover"
              src="./image/services.gif"
              alt=""
            />
          </div>
          <Title title="Explore" />
          <Title title="Our Services" />

          <div className="container rounded bg-gray-200 shadow-2xl w-9/12 ml-36 flex justify-between mt-12  transition ease-in duration-500 hover:scale-105">
            <div>
              <img
                className=" rounded mr-3 w-[900px] h-[300px] border-none"
                src="./image/Corporate2.gif"
                alt=""
              />
            </div>
            <div className="p-2">
              <h1 className="text-3xl font-bold ">Corporate Training</h1>
              <p className="mt-2 text-start">
                In the dynamic landscape of today's business world,<br></br>
                investing in the continuous development of your team is<br></br>
                paramount. Our Corporate Training programs are designed to{" "}
                elevate skills, foster innovation,<br></br> and drive tangible
                results. Collaborate with our expert <br></br> instructors to
                tailor a training solution that aligns with <br></br> your
                organization's unique goals, ensuring your team is well-
                equipped for the challenges of tomorrow.
              </p>
            </div>
          </div>
          <div className="container rounded bg-gray-200 shadow-2xl w-9/12 ml-36 flex justify-between mt-12  transition ease-in duration-500 hover:scale-105">
            <div>
              <img
                className="rounded mr-3 w-[900px] h-[300px] border-none"
                src="./image/corp-training.gif"
                alt=""
              />
            </div>
            <div className="p-2">
              <h1 className="text-3xl font-bold ">
                Campus To <br></br> Corporate Training
              </h1>
              <p className="mt-2">
                In the dynamic landscape of today's business world,<br></br>
                investing in the continuous development of your team is<br></br>
                paramount. Our Corporate Training programs are designed to{" "}
                elevate skills, foster innovation,<br></br> and drive tangible
                results. Collaborate with our expert <br></br> instructors to
                tailor a training solution that aligns with <br></br> your
                organization's unique goals, ensuring your team is well-
                equipped for the challenges of tomorrow.
              </p>
            </div>
          </div>
          <div className="container rounded bg-gray-200 shadow-2xl w-9/12 ml-36 flex justify-between mt-12  transition ease-in duration-500 hover:scale-105">
            <div>
              <img
                className="rounded mr-3 w-[900px] h-[300px] border-none"
                src="./image/corporate.gif"
                alt=""
              />
            </div>
            <div className="p-2">
              <h1 className="text-3xl font-bold ">
                SalesForce Implementation programs
              </h1>
              <p className="mt-2">
                In the dynamic landscape of today's business world,<br></br>
                investing in the continuous development of your team is<br></br>
                paramount. Our Corporate Training programs are designed to{" "}
                elevate skills, foster innovation,<br></br> and drive tangible
                results. Collaborate with our expert <br></br> instructors to
                tailor a training solution that aligns with <br></br> your
                organization's unique goals, ensuring your team is well-
                equipped for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
