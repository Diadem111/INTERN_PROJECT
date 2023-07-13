import React from "react";
import styles from "../../style";
import "../index.css";
// import { secondimage,thirdimage } from "../assets";

export const Hero = () => (
  <section
    id="home"
    className={`
  flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart}
  flex-col xl:px-0 sm:px-16 px-6 `}
    >
      {/* <div className='flex flex-row 
  items-center py-[6px] px-4 
  bg-discount-gradient rounded-[10px] mb-2 '>

  </div> */}
      <div
        className={`flex-1 flex-row
     items-center   ${styles.flexCenter}  md:my-0 my-1`}
      >
        <div className="  flex-col md:w-[90%] w-[100%]  ">
          <div className="w-[671px] h-[297px] ">
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
          </div>
          {/* img div */}
          <div
            className="w-[450px] h-[80px]    rounded-lg
        "
            style={{ position: "relative" }}
          >
            <img
              alt="Image"
              src="../tasty.png"
              className="w-full h-full rounded-lg"
            />
            <div
              style={{
                position: "absolute",
                top: "55%",
                left: "46%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div
                className="w-[375px] h-[18px]  "
                style={{
                  fontFamily: "Lato",
                  fontWeight: "500px",
                  lineHeight: "18px",
                }}
              >
                <p className="text-white text-[13px] py-2 text-start">
                  Find your next great culinary experience with TableScribe
                </p>
              </div>
              <section className="flex justify-center items-center w-full ">
                <div
                  className="w-[300px]  
          text-start py-3 flex "
                >
                  <input
                    type="text"
                    placeholder="Location or Cuisine"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "10px",
                      textAlign: "start",
                      paddingLeft: "30px",
                      marginRight: "2px",
                    }}
                  />
                  <img
                    src="../search.png"
                    alt="Search Logo"
                    style={{
                      position: "absolute",
                      top: "62%",
                      left: "10px",
                      color: "#888",
                      transform: "translateY(-50%)",
                      width: "16px",
                      filter: `invert(50%)`,
                    }}
                  />
                </div>
                <button id="but" className="ml-5 ">
                  Search
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* the seoncd img */}
    <div
      className={`flex-1 flex  
         ${styles.flexCenter} md:my-0 my-10 relative`}
    >
      <img
        src="../design.png"
        alt="image"
        className=" md:w-[90%] w-[100%] h-[344px]
          relative z-[5]  "
      />
    </div>

    {/* gradient */}
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
    <div className="absolute z-[0] w-[50%] right-20 bottom-20 blue__gradient" />
    {/* gradient end */}
    <div className={`ss`}></div>
  </section>
);
