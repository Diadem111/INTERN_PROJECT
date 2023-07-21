import React from "react";
<<<<<<< HEAD
import { Navigate, useNavigate } from "react-router";
=======
import { useNavigate } from "react-router";
>>>>>>> bb7a31185aa3f4af7acf2d4f87b22520eb18bea1

export default function Seating() {
  const navigate = useNavigate();
  return (
    <div className="border border-[#010101] p-6 flex justify-between items-center rounded-lg mb-[5%]">
      Seating Preference{" "}
<<<<<<< HEAD
      <button className=" bg-coreYellow py-2 border-none rounded-md"  onClick={() => {
                navigate("/reservation/arrangement");
              }}>
=======
      <button
        onClick={() => navigate("arrangement")}
        className=" bg-coreYellow py-2 border-none rounded-md"
      >
>>>>>>> bb7a31185aa3f4af7acf2d4f87b22520eb18bea1
        Choose your Seat
      </button>
    </div>
  );
}
