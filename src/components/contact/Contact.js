import React from "react";
import Back from "../common/back/Back";
import BackContact from "./BackContact";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15489552.477221591!2d55.296025349999994!3d18.59075649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e9dcb6f4af%3A0xe23dc07047ec68e3!2siLearnings%20Career%20%26%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1719859612542!5m2!1sen!2sin";
  return (
    <>
      <BackContact title="Contact Us" />
      <section className="contacts padding">
        <div className="container shadow flexSB flex justify-between">
          <div className="left row">
            <iframe
              className=" ml-4 mr-3 w-[550px] h-full flex justify-center border-none"
              title="ttt"
              src={map}
            ></iframe>
          </div>
          <div className="right row p-12">
            <h1 className="text-3xl font-bold">Contact us</h1>
            <p className=" my-8 mx-0">
              We're open for any suggestion or just to have a chat
            </p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p className="text-base">
                  203 lake Road, Pune, Maharastra, India
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@iLearnings.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +91869935598</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB flex justify-between">
                <input
                  className=" mr-2 w-full p-4 mb-4 outline-none border border-solid border-gray-300"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-full p-4 mb-4 outline-none border border-solid border-gray-300"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <input
                className="w-full p-4 mb-4 outline-none border border-solid border-gray-300"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="w-full p-4 mb-4 outline-none border border-solid border-gray-300"
                cols="30"
                rows="10"
              >
                Create a message here...
              </textarea>
              <button className="primary-btn py-4 px-7 bg-icons rounded-lg hover:translate-x-1">
                SEND MESSAGE
              </button>
            </form>

            <h3 className="mt-5 font-bold mb-2">Follow us here</h3>
            <span className=" text-icons font-bold text-xl tracking-wider cursor-pointer">
              FACEBOOK TWITTER INSTAGRAM DRIBBBLE
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
