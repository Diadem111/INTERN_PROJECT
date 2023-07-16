import React from "react";
import { cocoAsian } from "../../assets/index";

export default function RestaurantHero() {
  return (
    <section className=" bg-restaurant bg-cover bg-no-repeat h-[45rem]">
      <div className="z-10">
        <div className="text-white z-50 flex flex-col items-center gap-8 pt-[14%] w-full h-full ">
          <h1 className=" text-6xl font-zodiak font-bold text-center">
            Coco Asia
          </h1>
          <p className=" w-1/2 text-center text-base font-lato">
            Coco Asia located in the heart of Rushden Lakes shopping
            development, calm oasis for shoppers to take a break and enjoy
            breakfast, lunch and dinner
          </p>
          <button id="but" className="text-black">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
