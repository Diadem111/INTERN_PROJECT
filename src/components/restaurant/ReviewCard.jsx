import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({ name, location, img, review }) {
  return (
    <div className="p-4 text-lato border border-black my-4">
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="xs:w-3/5 max-ss:w-1/2 max-sm:w-2/5 mt-6">
            <img className="rounded-full" src={img} alt="" />
          </div>
          <div className="h-full w-full whitespace-nowrap flex flex-col row-start-2 xs:ml-8 ml-2 font-semibold">
            <span className="mds:text-lg sm:text-base text-sm xs:w-min">
              {name}
            </span>
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="flex col-start-2 items-center my-4">
          {[...Array(5)].map((key) => {
            return (
              <label key={key}>
                <FaStar size={22} className="star" color="#BCA78C" />
              </label>
            );
          })}
        </span>
      </div>
      <p className=" text-sm">{review}</p>
    </div>
  );
}
