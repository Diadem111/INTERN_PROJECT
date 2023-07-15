import React from "react";
import { design } from "../../assets/index";

export const LandingpageImg = () => {
  return (
    <section className="mx-auto">
      <div className="relative max-h-[500px]">
        {/* overlay */}
        <div className="absolute w-full h-full  max-h-[500px] bg-black/10 flex flex-col justify-center text-center">
          <h1
            className="px-4 text-4xl md:text-[54px] font-zodiak
          font-bold leading-relaxed   tracking-wide   text-white 
           font-bold"
          >
            Your One Touch To <br /> Perfect Dining...
            <br />
            <button
              className="w-[20%] md:w-[10%] 
              but2 text-sm p-3 mt-4 text-primary font-lato text-[18px] font-semibold leading-5"
            >
              Book a Table
            </button>
          </h1>
        </div>

        <img
          className="w-full max-h-[600px] object-cover "
          src={design}
          alt="image"
        />
      </div>
    </section>
  );
};
