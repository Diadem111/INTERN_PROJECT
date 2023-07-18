import React from "react";
import DatePicker from "./DatePicker";
import Time from "./Time";
import Seating from "./Seating";

export default function ReservationBody() {
  return (
    <section className=" bg-white w-[80%] mx-[10%] rounded-t-md mt-[-30%] mb-[10%] px-[10%] pt-4 pb-[5%] font-lato">
      <div className="w-max mb-[8%]">
        <h1 className="text-2xl font-bold pt-4 mb-4">Book a table</h1>
        <hr className="mb-2 border border-[#010101] w-full" />
      </div>
      <div className="border border-[#010101] p-6 flex justify-between items-center rounded-lg mb-[5%]">
        <span className="text-xl font-bold">Guest</span> <Counter />
      </div>
      <DatePicker />
      <Time />
      <Seating />
      <div className="flex items-center justify-between">
        <button className="bg-white py-2 border rounded-md w-[45%]">
          Cancel
        </button>
        <button className="bg-coreYellow py-2 border-none rounded-md w-[45%]">
          Reserve
        </button>
      </div>
    </section>
  );
}
// Counter component for the number of guests
function Counter() {
  const [count, setCount] = React.useState(1);
  function add() {
    if (count > -1) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  }
  function subtract() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }
  return (
    <div className="border rounded-lg border-[#010101]">
      <button className="border-none text-3xl" onClick={subtract}>
        -
      </button>
      <span className="text-2xl">{count}</span>
      <button className="border-none text-2xl" onClick={add}>
        +
      </button>
    </div>
  );
}
