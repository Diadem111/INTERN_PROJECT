import React from "react";
import { Navigate, useNavigate } from "react-router";

export default function Seating() {
  const navigate = useNavigate();
  return (
    <div className="border border-[#010101] p-4 flex max-ss:flex-col justify-between items-center rounded-lg mb-[5%]">
      <span className="font-bold">Seating Preference</span>
      <button
        className=" bg-coreYellow py-3 border-none rounded-md h-full"
        onClick={() => {
          navigate("/reservation/arrangement");
        }}
      >
        Choose your Seat
      </button>
    </div>
  );
}
