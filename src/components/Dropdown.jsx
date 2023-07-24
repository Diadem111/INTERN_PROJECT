import React from "react";
import { PiCaretDownBold } from "react-icons/pi";

export default function Dropdown({ array, textSize, bold, padding }) {
  return (
    <div
      className={`w-fit h-full p-${padding} border rounded-lg border-black flex gap-4 max-sm:gap-0 items-center `}
    >
      <select
        className={`appearance-none rounded-lg outline-none max-sm:text-lg text-${textSize} font-${bold}`}
        name="menu"
        id=""
      >
        {array.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
      <div className="h-full flex items-center">
        <PiCaretDownBold />
      </div>
    </div>
  );
}
