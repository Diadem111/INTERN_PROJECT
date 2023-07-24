import React from "react";

export const Beforefooter = () => {
  return (
    <div className="mx-auto p-4 rounded mt-10">
      <div className="relative rounded">
        {/* overlay */}
        <div className="absolute w-full h-full  max-h-[500px] bg-black/10 flex flex-col justify-center text-center">
          <h1 className="px-4 lg:text-4xl text-[30px]  text-white md:text-5xl lg:text-4xl font-bold">
            Restauranteurs Join Us
          </h1>
          <h1 className="px-4 lg:text-4xl text-[20px] text-white md:text-3xl lg:text-xl pt-3 ">
            Join the more than 5,000 restaurants which fills sit <br />
            and manage booking with TableScribe
            <br />
            <button className="lg:w-[10%] w-[30]  but2 text-sm p-3 mt-4 text-primary font-bold">
              Learn More
            </button>
          </h1>
        </div>

        <img
          className="w-full lg:h-[300px] h-[350px] object-cover rounded-2xl"
          src="../next.png"
          alt="image"
        />
      </div>
    </div>
  );
};
