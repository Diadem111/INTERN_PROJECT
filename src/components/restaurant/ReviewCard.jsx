import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({ name, location, img, review }) {
  return (
    <div className="p-4 text-lato border border-black my-4">
      <div className="flex flex-col">
        <div className="grid grid-cols-5 grid-rows-3 items-center">
          <div className="h-full col-start-1 row-span-3 col-span-2">
            <img className="w-full h-full rounded-full" src={img} alt="" />
          </div>
          <div className="h-full col-start-3 col-span-3 flex flex-col row-start-2 ml-8 font-semibold">
            <span className=" text-lg">{name}</span>
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="flex col-start-2 items-center my-4">
          {[...Array(5)].map((key) => {
            return (
              <label key={key}>
                <FaStar size={30} className="star" color="#BCA78C" />
              </label>
            );
          })}
        </span>
      </div>
      <p className=" text-sm">{review}</p>
    </div>
  );
}
