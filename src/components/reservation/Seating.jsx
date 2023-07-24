import React from "react";
import { Navigate, useNavigate } from "react-router";

export default function Seating() {
  const navigate = useNavigate();
  return (
    <div className="border border-[#010101] p-6 flex justify-between items-center rounded-lg mb-[5%]">
      Seating Preference{" "}

      <button className=" bg-coreYellow py-2 border-none rounded-md"  
      onClick={() => {
                navigate("/reservation/arrangement");
              }}>
  
      

      <button
        className=" bg-coreYellow py-2 border-none rounded-md"
        onClick={() => {
          navigate("/reservation/arrangement");
        }}
      />
        Choose your Seat
      </button>
    </div>
  );
}
