import React from "react";
import Dropdown from "../Dropdown";
import { Days, Months } from "../../constants";

export default function DatePicker() {
  return (
    <div className="border border-[#010101] p-6 flex fo justify-between items-center rounded-lg mb-[5%]">
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Date</h1>{" "}
          <Dropdown
            array={Months}
            textSize="xl"
            bold={"semibold"}
            padding={3}
          />
        </div>
        <div className="w-full grid grid-cols-7">
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
    <button className="flex flex-col items-center justify-center m-2 h-32 hover:bg-coreYellow border-none">
      <di className="mb-3">{day}</di>
      <div className="font-bold">{number}</div>
    </button>
  );
}
