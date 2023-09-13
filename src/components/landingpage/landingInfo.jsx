import React from "react";
import { useNavigate } from "react-router";
import {
  youngCoupleDinner,
  youngPeople,
  blackman,
  coupleCelebrating,
  design,
} from "../../assets/index";
export const LandingpageImg = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-auto max-xs:h-[85dvh] max-ss:h-[50dvh] max-md:h-[50dvh] h-[84dvh] items-center relative">
      <div className="w-full h-40%  max-h-[950px] flex flex-col justify-center text-center">
        <h1
          className="px-4 mt-10 text-5xl lg:text-6xl mlg:text-7xl xl:text-8xl leading-relaxed font-zodiak font-bold tracking-wide text-[#64351D]
           "
        >
          Your One Touch To <br /> Perfect Dining...
          <br />
          <button
            onClick={() => {
              navigate("/gallery");
            }}
            className="w-[40%] md:w-[10%] 
              but2 text-sm p-3 mt-4 text-primary font-lato text-[24px] hover:text-yellow-100
               font-semibold leading-5"
          >
            Book a Table
          </button>
        </h1>
      </div>
      <div className="w-110vw grid grid-cols-4 gap-4 items-center my-4 mx-0 h-min flex-grow overflow-y-hidden">
        <img
          className="w-full"
          style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)" }}
          src={youngPeople}
          alt=""
        />
        <img
          className="w-full aspect-[7/5.1]"
          style={{ clipPath: "polygon(0 5%, 100% 5%, 100% 95%, 0 95%)" }}
          src={design}
          alt=""
        />
        <img
          style={{ clipPath: "polygon(0 5%, 100% 5%, 100% 95%, 0 95%)" }}
          src={coupleCelebrating}
          alt=""
        />
        <img
          className="w-full"
          style={{ clipPath: "polygon(0 10%, 100% 4%, 100% 95%, 0 90%)" }}
          src={blackman}
          alt=""
        />
      </div>
    </section>
  );
};
