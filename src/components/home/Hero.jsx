import React from "react";
import styles from "../../style";
import "../../index.css";
// import { secondimage,thirdimage } from "../assets";

export const Hero = () => (
  <section id="home">
    <div
      className={`flex-1 w-full md:h-[100px]
  flex-col xl:px-0 sm:px-16 px-6 h-[200px]   `}
    >
      {/* <div className='flex flex-row 
  items-center py-[6px] px-4 
  bg-discount-gradient rounded-[10px] mb-2 '>

  </div> */}
      <div
        className={`flex-1 
     items-center   ${styles.flexCenter}  md:my-0 my-1`}
      >
        <div className=" w-full  ">
          {/* <div className="w-[671px] h-[297px] ">
            <h1
              className="flex-1 font-zodiak 
     text-[64px] font-normal
     font-semibold leading-normal 
     ss:text-[72px] text-[52px] ss:leading-[100.8px]
     leading-[75px]
      text-white typo "
            >
              Your One Touch{" "}
              <br
                className="sm:block
      hidden"
              />{" "}
              <span> To Perfect</span> <br />
              Dining...
            </h1>
          </div> */}
          {/* img div */}
          <div
            className="w-full md:h-[100px] h-[150px]    rounded-lg"
            style={{ position: "relative" }}
          >
            <div className="w-full md:h-[6.8rem] h-[12rem] bg-cover bg-gallerySearch  rounded-lg  bg-black/2"></div>
            <div
              className="absolute  md:left-36 left-28 md:
            md:-translate-y-28
            text-center -translate-x-28 -translate-y-44 mx-auto "
            >
              <div
                className="md:w-[50rem] w-[20rem] h-[10rem]
                 mx-auto font-lato font-medium
                 break-word "
              >
                <p
                  className="text-white md:text-[20px] 
                
                 sm:break-word text-[22px]  px-2 lg:px-0 
                 leading-2   py-2 text-start font-Lato"
                >
                  Find your next great culinary experience with TableScribe
                </p>
              </div>
            </div>
            {/* input details */}
            <div
              className="absolute top-36 md:left-36 
                   text-center md:-translate-x-28 md:-translate-y-28
                   -translate-x-28 -translate-y-16 left-[115px]   "
            >
              <section
                className="flex 
                w-full  flex-wrap  items-center"
              >
                <div
                  className="md:w-[18rem] w-[16rem] lg:w-[510px]   
          text-start py-3 flex "
                >
                  <input
                    type="text"
                    placeholder="Location or Cuisine"
                    className="w-[100%] rounded-lg p-2 text-start 
                    px-10 font-bold font-lato text-[17px] "
                  />
                  <img
                    src="../search.png"
                    alt="Search Logo"
                    className="md:top-[40%] top-6 
                    md:-translate-y-42 -translate-y-42"
                    style={{
                      position: "absolute",
                      // top: "50%",
                      left: "10px",
                      color: "#888",
                      // transform: "translateY(-180%)",
                      width: "18px",
                      filter: `invert(50%)`,
                    }}
                  />
                </div>
                <button className="ml-5 py-1 px-3 h-min rounded-md text-lg font-semibold bg-coreYellow">
                  Search
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* the seoncd img */}
    {/* <div
      className={`flex-1 flex  
         ${styles.flexCenter} md:my-0 my-10 relative`}
    >
      <img
        src="../design.webp"
        alt="image"
        className=" md:w-[90%] w-[100%] h-[344px]
          relative z-[5]  "
      />
    </div> */}

    {/* gradient */}
    {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
    <div className="absolute z-[0] w-[50%] right-20 bottom-20 blue__gradient" />
    gradient end
    <div className={`ss`}></div> */}
  </section>
);
