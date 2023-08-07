import React from "react";

export default function ReservationHero() {
  return (
    <section
      className=" bg-restaurant 
    bg-cover bg-no-repeat h-[47rem]
     max-sm:h-[25rem] max-ss:h-[20rem] max-md:h-[35rem] mlg:h-[55rem] xl:h-[65rem]"
    >
      <div className="z-10 flex flex-col items-center pt-[15.5%] w-full h-full ">
        <h1 className="text-white max-xs:text-4xl xs:text-4xl sm:text-5xl mlg:text-7xl font-zodiak font-bold text-center">
          Reservation
        </h1>
      </div>
    </section>
  );
}
