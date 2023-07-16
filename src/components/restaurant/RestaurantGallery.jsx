import React from "react";
import {
  banquet,
  coupleHavingDiner,
  homemadeRoast,
  restaurantHall,
} from "../../assets";

export default function RestaurantGallery() {
  return (
    <div className="mb-[10%]">
      <div className="mb-4 font-bold  text-xl">Gallery</div>
      <hr className="mb-2 bg-slate-500 w-full" />
      <div className=" grid grid-cols-2 mt-[7%]">
        <div className="w-full h-full">
          <img
            className="rounded-lg w-full h-auto p-1"
            src={restaurantHall}
            alt="Restaurant hall"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          <div className=" col-start-1">
            <img
              className="rounded-lg w-full h-full p-1"
              src={coupleHavingDiner}
              alt=""
            />
          </div>
          <div className=" col-start-2">
            <img
              className="rounded-lg w-full h-full p-1"
              src={homemadeRoast}
              alt=""
            />
          </div>
          <div className=" col-start-1 row-start-2">
            <img
              className="rounded-lg w-full h-full p-1"
              src={banquet}
              alt=""
            />
          </div>
          <div className=" col-start-2 row-start-2 p-1 relative z-10">
            <div className="w-full h-full bg-gallery4 rounded-lg bg-center bg-no-repeat bg-cover flex place-items-center"></div>
            <p
              className="text-white text-xl w-full text-center z-50 absolute top-1/2 left-1/2"
              style={{ transform: "translate(-50%, -25%)" }}
            >
              +246 more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
