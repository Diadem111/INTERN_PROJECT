import React from "react";
import { Times } from "../../constants";

export default function Time() {
  return (
    <div className="border border-[#010101] p-6 flex justify-between flex-col rounded-lg mb-[5%]">
      <h1 className="text-xl font-bold mb-4">Time</h1>
      <div className="grid grid-cols-4 grid-rows-3 justify-center max-sm:flex max-sm:flex-wrap">
        {Times.map(({ value, key }) => (
          <TimeButton time={value} key={key} />
        ))}
      </div>
    </div>
  );
}

function TimeButton({ time }) {
  return (
    <button className="py-2 max-sm:py-1 max-sm:px-2 m-2 max-sm:m-1 text-2xl flex-grow max-sm:flex-grow-0 max-sm:text-lg max-ss:sm text-center font-bold hover:bg-coreYellow">
      {time}
    </button>
  );
}
