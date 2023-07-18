import React from "react";
import { MenusOptions } from "../../constants/index.js";
import { PiCaretRightThin } from "react-icons/pi";
import Dropdown from "../Dropdown.jsx";
import { angleTable, closeUpToast, englishBreakfast } from "../../assets";

export default function RestaurantMenu() {
  return (
    <div className="mb-[10%]">
      <div className="mb-4 font-bold  text-xl">Menu</div>
      <hr className="mb-[6%] bg-slate-500 w-full" />
      <div className="flex flex-col">
        <div className="w-full flex justify-between mb-4">
          <Dropdown array={MenusOptions} textSize="base" padding={2} />
          <PiCaretRightThin size={30} />
        </div>
        <div className="grid grid-cols-3">
          <div className="col-start-1 p-2">
            <img className="rounded-xl" src={englishBreakfast} alt="" />
          </div>
          <div className="col-start-2 p-2">
            <img className="rounded-xl" src={angleTable} alt="" />
          </div>
          <div className="col-start-3 p-2">
            <img className="rounded-xl" src={closeUpToast} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
