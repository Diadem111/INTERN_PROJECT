import React from "react";
import { Navigate, useNavigate } from "react-router";

export const Card = () => {
  const navigate = useNavigate();
  return (
    <div
      className=" p-8 rounded-lg bg-white
     relative lg:h-[85%] lg:w-[80%] h-[60%]  "
    >
      <section className="flex">
        {/* yellow square */}
        <section>
          <p
            className="absolute lg:-left-64 right-24
            lg:z-0 z-10
             lg:bottom-10 -bottom-20 lg:text-primary text-white
         transform rotate-90 -translate-y-1/2 h-[200px]
        w-[300px] font-lato text-[24px] text-bolder "
          >
            Window area
          </p>
          <div
            className="absolute lg:left-2 -left-40 top-52
         transform -translate-y-1/2  h-[200px]
        w-[100px] bg-yellow-500 rounded-full "
            onClick={() => {
              navigate("/arrangement/success");
            }}
          ></div>
        </section>
        {/* first circle  */}
        <div className="justify-center items-center text-center">
          <section>
            <div
              className="absolute lg:left-[210px]
               -left-14 top-52
         transform -translate-y-1/2 h-[170px] 
        w-[170px] bg-primary rounded-full"
              onClick={() => {
                navigate("/arrangement/success");
              }}
            ></div>
            <p
              className="absolute lg:left-52
              -left-14 lg:bottom-24 -bottom-10 lg:z-0 z-10 lg:text-primary text-white
         transform -translate-y-1/2 h-[170px]
        w-[170px]  rounded-full text-bolder font-lato
         text-[24px]"
            >
              Center area
            </p>
          </section>
        </div>
        {/* third sqaure */}
        <section>
          <div
            className="absolute lg:right-0
             -right-40 top-52
       transform -translate-y-1/2 h-[200px]
      w-[100px] bg-primary rounded-full "
            onClick={() => {
              navigate("/arrangement/success");
            }}
          ></div>
          <p
            className="absolute lg:left-[630px] 
        left-[150px]
          lg:bottom-40 lg:z-0
        bottom-10 z-10 lg:text-primary text-white
       transform -translate-y-1/2 h-[200px]
        w-[200px] -rotate-90  font-lato text-[26px]
         text-bolder"
          >
            Wall area
          </p>
        </section>
      </section>

      {/* second column */}
      <section className=" hidden md:block flex">
        <div
          className="absolute lg:left-14 -left-2 bottom-20
      transform -translate-x-1/2 h-[200px] w-[100px] 
      bg-primary rounded-full"
        ></div>
        {/* second circle */}
        <section>
          <div
            className="absolute left-1/2
             lg:left-[295px] bottom-28
      transform -translate-x-1/2 h-[170px] w-[170px]
      bg-primary rounded-full"
            onClick={() => {
              navigate("/arrangement/success");
            }}
          ></div>
          {/* <p className=''>Center</p> */}
        </section>
        <div
          className="absolute lg:right-0 -right-[60px]
           bottom-20
      transform -translate-x-1 h-[200px] w-[100px]
      bg-primary rounded-full"
          onClick={() => {
            navigate("/arrangement/success");
          }}
        ></div>
      </section>

      {/* third column */}
      <section className="flex">
        <section>
          <p
            className="absolute left-1/2
             lg:-top-6 top-6 z-10 lg:z-0
              lg:text-primary text-white
      transform -translate-x-1/2 h-[260px]
       w-[150px] text-bolder font-lato
       text-[24px]
       "
          >
            Outdoor area
          </p>

          <div
            className="absolute left-1/2 -top-20
      transform rotate-90 -translate-x-1/2 h-[260px]
       w-[70px]
       bg-primary rounded-full "
            onClick={() => {
              navigate("/arrangement/success");
            }}
          ></div>
        </section>
        <section className="text-center">
          <p
            className="absolute lg:left-1/2 left-[30px]
         lg:-bottom-64 -bottom-48 z-10 lg:z-0
          lg:text-primary text-white
      transform -translate-x-1/2 h-[260px] w-[150px]
      text-bolder font-lato
       text-[24px]
      "
          >
            Rooftop
          </p>
          <div
            className="absolute left-1/2 
          -bottom-20
      transform -translate-x-1/2 h-[260px] w-[70px]
      bg-primary rotate-90 rounded-full"
            onClick={() => {
              navigate("/arrangement/success");
            }}
          ></div>
        </section>
      </section>
    </div>
  );
};
