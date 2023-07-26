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
    <div className="grid grid-cols-10 p-5 border border-[#64748B] my-4">
      <div className="flex flex-col col-start-1 mds:col-span-5 col-span-10 gap-3  ">
        <div className="flex">
          <div className="flex flex-col max-ss:justify-centre">
            <h3 className="text-xl font-bold mb-2">{heading}</h3>
            <div className="flex gap-9 col-start-3 items-center p-1">
              <span className="justify-start">
                <img className="h-full w-11/12" src={cash} alt="Cash" />
              </span>
              <span className="font-medium">NGN {price} per person</span>
            </div>
            <div className="flex gap-9 col-start-3 items-center p-1">
              <span className=" justify-start">
                <img className="h-full w-11/12" src={calender} alt="Calender" />
              </span>
              <span className="font-medium">{dateRange}</span>
            </div>
          </div>
          <div className="mds:hidden max-ss:hidden flex justify-center">
            <img className=" w-3/5 rounded-md" src={img} alt="Image of food" />
          </div>
        </div>
        <p className="my-4">{foodDescription}</p>
        <button
          onClick={() => navigate("reservation")}
          id="but"
          className="button w-2/5 mds:self-start self-center"
        >
          Book a Table
        </button>
      </div>
      <div className="col-start-7 col-span-4 mds:inline hidden">
        <img
          className="h-full w-11/12 rounded-md"
          src={img}
          alt="Image of food"
        />
      </div>
    </div>
  );
}
