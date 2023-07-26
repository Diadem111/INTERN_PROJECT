import React from "react";
import { Navigate, useNavigate } from "react-router";

export const Card = ({ isOpen, closeModal, children }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;
  return (
    <section
      className="bg-white overflow-hidden
    lg:h-[120vh] h-[80vh] z-10 shadow-lg lg:w-[40%] w-[95%]
     md:w-[60%] sm:px-4 px-4
      justify-center items-center
     flex "
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <div
        className="fixed inset-0 flex
       items-center justify-center z-50 "
      >
        <div
          className="fixed inset-0 bg-gray-800 
      opacity-75"
        ></div>
        <div
          className=" p-8 rounded-lg bg-white
     relative lg:h-[100%] lg:w-[50%] h-[60%] w-[99%]   "
        >
          <section className="flex">
            {/* yellow square */}
            <section>
              <p
                className="absolute lg:-left-52 -left-48
            lg:z-0 z-10
             lg:bottom-10 -bottom-24 lg:text-primary text-white
         transform rotate-90 -translate-y-1/2 h-[200px]
        w-[300px] font-lato text-[24px] text-bolder "
              >
                Window area
              </p>
              <div
                className="absolute lg:left-14 -left-0
            lg:top-52 top-60
         transform -translate-y-1/2  h-[200px]
         
       lg:w-[100px] w-[90px] bg-yellow-500 rounded-full  hover:bg-primary "
                onClick={() => {
                  navigate("/arrangement/success");
                }}
              ></div>
            </section>
            {/* first circle  */}
            <div
              className="justify-center items-center
         text-center"
            >
              <section>
                <div
                  className="absolute lg:left-[250px]
               left-[90px] lg:top-52 top-60
         transform -translate-y-1/2 h-[170px] 
        w-[170px] bg-primary rounded-full
          hover:bg-gray-400"
                  onClick={() => {
                    navigate("/arrangement/success");
                  }}
                ></div>
                <p
                  className="absolute lg:left-[250px]
              left-[90px] lg:bottom-28 -bottom-10
              lg:z-0 z-10 lg:text-primary text-white
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
                className="absolute lg:right-14
             -right-1 lg:top-52 top-60
       transform -translate-y-1/2 h-[200px] hover:bg-gray-400
      w-[100px] bg-primary rounded-full "
                onClick={() => {
                  navigate("/arrangement/success");
                }}
              ></div>
              <p
                className="absolute lg:left-[630px] 
      left-72
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
          <section className=" hidden md:block ">
            <div
              className="absolute lg:left-28 -left-2 bottom-20
      transform -translate-x-1/2 h-[200px] w-[100px] 
      bg-primary rounded-full  hover:bg-gray-400"
            ></div>
            {/* second circle */}
            <section>
              <div
                className="absolute left-1/2
             lg:left-[340px] bottom-40
      transform -translate-x-1/2 h-[170px] w-[170px]
      bg-primary rounded-full  hover:bg-gray-400"
                onClick={() => {
                  navigate("/arrangement/success");
                }}
              ></div>
              {/* <p className=''>Center</p> */}
            </section>
            <div
              className="absolute lg:right-10 -right-[60px]
           bottom-20
      transform -translate-x-1 h-[200px] w-[100px]  hover:bg-gray-400
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
             lg:-top-1 top-10 z-10 lg:z-0
              lg:text-primary text-white
      transform -translate-x-1/2 h-[260px]
       w-[150px] text-bolder font-lato
       text-[24px]
       "
              >
                Outdoor area
              </p>

              <div
                className="absolute left-1/2 -top-[60px]
      transform rotate-90 -translate-x-1/2 h-[260px]
       w-[70px]
       bg-primary rounded-full  hover:bg-gray-400 "
                onClick={() => {
                  navigate("/arrangement/success");
                }}
              ></div>
            </section>
            <section className="text-center">
              <p
                className="absolute lg:left-1/2 left-44
         lg:-bottom-[210px] -bottom-[190px] z-10 lg:z-0
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
         lg:-bottom-10 -bottom-20
      transform -translate-x-1/2 h-[260px] w-[70px]
      bg-primary rotate-90 rounded-full  hover:bg-gray-400"
                onClick={() => {
                  navigate("/arrangement/success");
                }}
                
              ></div>
            </section>
          </section>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
