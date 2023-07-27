import React from "react";
import Dropdown from "../Dropdown";
import { Days, Months } from "../../constants";

export default function DatePicker() {
  return (
    <div className="border border-[#010101] max-sm:p-3 p-6 flex justify-between items-center rounded-lg mb-[5%]">
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h1 className="max-sm:text-lg text-xl font-bold flex max-sm:flex-col">
            Date
          </h1>{" "}
          <Dropdown
            array={Months}
            textSize="xl"
            bold={"semibold"}
            padding={3}
          />
        </div>
        <div className="w-full flex flex-wrap justify-center gap-3 max-sm:gap-1">
          {Days.map(({ day, number }) => (
            <Day key={number} number={number} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Day({ day, number }) {
  return (
    <button className="button flex flex-col items-center md:text-xl max-sm:w-[5%] max-sm:text-sm justify-center m-2 h-32 hover:bg-coreYellow border-none">
      <div className="mb-3">{day}</div>
      <div className="font-bold">{number}</div>
    </button>
  );
}
