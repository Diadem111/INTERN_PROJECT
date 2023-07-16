import React from "react";
import { PiCaretDownBold, PiCaretRightThin } from "react-icons/pi";
import { angleTable, closeUpToast, englishBreakfast } from "../../assets";

export default function RestaurantMenu() {
  return (
    <div className="mb-[10%]">
      <div className="mb-4 font-bold  text-xl">Menu</div>
      <hr className="mb-[6%] bg-slate-500 w-full" />
      <div className="flex flex-col">
        {" "}
        <div className="w-full flex justify-between mb-4">
          <div className=" w-fit h-full p-2 border rounded-lg border-black flex gap-4 items-center">
            <select className="appearance-none rounded-lg" name="menu" id="">
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            <div className="h-full flex items-center">
              <PiCaretDownBold />
            </div>
          </div>
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
