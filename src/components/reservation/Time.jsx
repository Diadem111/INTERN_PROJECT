import React from "react";
import { Times } from "../../constants";

export default function Time() {
  return (
    <div className="border border-[#010101] p-6 flex justify-between flex-col rounded-lg mb-[5%]">
      <h1 className="text-xl font-bold mb-4">Time</h1>
      <div className="grid grid-cols-4 grid-rows-3">
        {Times.map((time) => (
          <TimeButton time={time} />
        ))}
      </div>
    </div>
  );
}

function TimeButton({ time }) {
  return (
    <button className="py-2 m-2 text-2xl font-bold hover:bg-coreYellow">
      {time}
    </button>
  );
}
