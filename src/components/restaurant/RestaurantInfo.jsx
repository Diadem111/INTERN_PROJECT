import React from "react";
import RestaurantDescription from "./RestaurantDescription";
import Experiance from "./Experiance";

export default function RestaurantInfo() {
  return (
    <section className=" bg-white w-[80%] mx-[10%] rounded-t-md mt-[-20%] mb-[10%] px-[10%] pt-4 pb-[5%] font-lato">
      <RestaurantDescription />
      <Experiance />
    </section>
  );
}
