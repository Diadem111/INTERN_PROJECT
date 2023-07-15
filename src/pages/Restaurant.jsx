import React from "react";
import RestaurantHero from "../components/restaurant/RestaurantHero";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";

export default function Restaurant() {
  return (
    <div className="bg-[#FEFCF2] h-screen flex flex-col">
      <RestaurantHero />
      <RestaurantInfo />
    </div>
  );
}
