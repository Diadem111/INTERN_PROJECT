import React from "react";

export const Card = () => {
  return (
    
    <div
      className=" p-8 rounded-lg 
     relative h-[94%] w-[80%] " 
    >
      
      <section className="flex">
        <section>
          <p
            className="absolute -left-64 bottom-28
         transform rotate-90 -translate-y-1/2 h-[200px]
        w-[300px] font-lato text-[24px] text-bolder "
          >
            Window area
          </p>
          <div
            className="absolute left-2 top-52
         transform -translate-y-1/2 h-[200px]
        w-[100px] bg-yellow-500 rounded-full "
          ></div>
        </section>
        <div className="justify-center items-center text-center">
          <section>
            <div
              className="absolute left-52 top-52
         transform -translate-y-1/2 h-[170px]
        w-[170px] bg-primary rounded-full"
            ></div>
            <p
              className="absolute left-52 bottom-40
         transform -translate-y-1/2 h-[170px]
        w-[170px]  rounded-full text-bolder font-lato
         text-[24px]"
            >
              Centre area
            </p>
          </section>
        </div>
       <section>
       <div
          className="absolute right-0 top-52
       transform -translate-y-1/2 h-[200px]
      w-[100px] bg-primary rounded-full "
        ></div>
        <p className="absolute -right-52 bottom-60
       transform -translate-y-1/2 h-[200px]
        w-[200px] -rotate-90  font-lato text-[26px]
         text-bolder">Wall area</p>
       </section>
      </section>

      {/* second column */}
      <section className="flex">
        <div
          className="absolute left-14 bottom-40
      transform -translate-x-1/2 h-[200px] w-[100px] 
      bg-primary rounded-full"
        ></div>
        <section>
          <div
            className="absolute left-1/2 bottom-40 
      transform -translate-x-1/2 h-[170px] w-[170px]
      bg-primary rounded-full"
          ></div>
          {/* <p className=''>Center</p> */}
        </section>
        <div
          className="absolute right-0 bottom-40 
      transform -translate-x-1 h-[200px] w-[100px]
      bg-primary rounded-full"
        ></div>
      </section>

      {/* third column */}
      <section className="flex">
        <section>
          <p
            className="absolute left-1/2 -top-6
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
       bg-primary rounded-full"
          ></div>
        </section>
       <section className="text-center">
        <p className="absolute left-1/2 -bottom-56
      transform -translate-x-1/2 h-[260px] w-[150px]
      text-bolder font-lato
       text-[24px]
      ">
          Rooftop
        </p>
       <div
          className="absolute left-1/2 -bottom-14
      transform -translate-x-1/2 h-[260px] w-[70px]
      bg-primary rotate-90 rounded-full"
        ></div>

        </section>
             </section>
      {/* shapes to d left */}

      {/* shapes to the right */}

      {/* shapes at the top */}

      {/* shapes at the bottom  */}

      <p className="text-xl font-bold text-center">Your content goes here</p>
    </div>
  );
};
