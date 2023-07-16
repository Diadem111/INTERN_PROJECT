import React from "react";
import RestaurantDescription from "./RestaurantDescription";
import Experiences from "./Experiances";
import RestaurantGallery from "./RestaurantGallery";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReviews from "./RestaurantReviews";

export default function RestaurantInfo() {
  return (
    <section className=" bg-white w-[80%] mx-[10%] rounded-t-md mt-[-20%] mb-[10%] px-[10%] pt-4 pb-[5%] font-lato">
      <RestaurantDescription />
      <Experiences />
      <RestaurantGallery />
      <RestaurantMenu />
      <RestaurantReviews />
    </section>
  );
}
