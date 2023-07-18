import React from "react";

export default function Seating() {
  return (
    <div className="border border-[#010101] p-6 flex justify-between items-center rounded-lg mb-[5%]">
      Seating Preference{" "}
      <button className=" bg-coreYellow py-2 border-none rounded-md">
        Choose your Seat
      </button>
    </div>
  );
}
