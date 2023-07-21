import React from "react";
import { calender, cash } from "../../assets";
import { useNavigate } from "react-router";

export default function MenuCard({
  heading,
  price,
  dateRange,
  foodDescription,
  img,
}) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-10 p-5 border border-[#64748B] my-12">
      <div className="flex flex-col col-start-1 col-span-5 gap-3">
        <h3 className="text-xl font-bold">{heading}</h3>
        <div className="grid grid-cols-8 col-start-3 items-center p-1">
          <span className="grid col-start-1 justify-start">
            <img className="h-full w-11/12" src={cash} alt="Cash" />
          </span>
          <span className=" col-start-2 col-span-5 font-medium">
            NGN {price} per person
          </span>
        </div>
        <div className="grid grid-cols-8 col-start-3 items-center p-1">
          <span className="grid col-start-1 justify-start">
            <img className="h-full w-11/12" src={calender} alt="Calender" />
          </span>
          <span className=" col-start-2 col-span-5 font-medium">
            {dateRange}
          </span>
        </div>
        <p className="my-4">{foodDescription}</p>
        <button
          onClick={() => navigate("reservation")}
          id="but"
          className="w-2/5"
        >
          Book a Table
        </button>
      </div>
      <div className="col-start-7 col-span-4">
        <img
          className="h-full w-11/12 rounded-md"
          src={img}
          alt="Image of food"
        />
      </div>
    </div>
  );
}
