import React from "react";
import { useNavigate } from "react-router";
import { design } from "../../assets/index";
export const LandingpageImg = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-auto">
      <div className="relative max-sm:h-[100vh] max-h-[500px]">
        {/* overlay */}
        <div
          className="absolute w-full h-full  max-h-[950px]
         bg-black/20 flex flex-col justify-center 
         text-center "
        >
          <h1
            className="px-4  mt-10 text-4xl md:text-[70px] font-zodiak
          font-bold leading-relaxed   
          tracking-wide   text-white 
           "
          >
            Your One Touch To <br /> Perfect Dining...
            <br />
            <button
              onClick={() => {
                navigate("/gallery");
              }}
              className="w-[40%] md:w-[10%] 
              but2 text-sm p-3 mt-4 text-primary font-lato text-[24px]
               font-semibold leading-5"
            >
              Book a Table
            </button>
          </h1>
        </div>

        <img className="w-full h-full object-cover " src={design} alt="image" />
      </div>
    </section>
  );
};
