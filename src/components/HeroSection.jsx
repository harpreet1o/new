import React from "react";
import logo from "../assets/heroimageclearbg.png";

function HeroSection() {
  return (
    <div className="bg-black p-6 text-white">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-2 gap-x-24 gap-y-12 items-center">
        <div className="flex  flex-col ">
          <p className="text-blue text-2xl my-4">Welcome.</p>
          <p className="text-lg my-4">
            My name is Harpreet Singh, I am Web Developer aiming to learn full
            stack. Consistently working on new projects. As learning is a never
            ending process...
          </p>
          <div className="flex gap-4 items-center mb-4">
            <button className=" text-black font-semibold text-lg py-2 px-4 rounded-full bg-white transition duration-300 ease-in-out hover:bg-blue">
              Projects
            </button>

            <button className=" text-black font-semibold text-lg py-2 px-4 rounded-full bg-white transition duration-300 ease-in-out hover:bg-blue">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="hero image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
