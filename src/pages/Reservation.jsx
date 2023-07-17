import React from "react";
import ReservationHero from "../components/reservation/ReservationHero";
import ReservationBody from "../components/reservation/ReservationBody";

export default function Reservation() {
  return (
    <div className="bg-[#FEFCF2] h-full flex flex-col">
      <ReservationHero />
      <ReservationBody />
    </div>
  );
}
