import React, {useState } from "react";
import RestaurantDescription from "./RestaurantDescription";
import Experiences from "./Experiances";
import RestaurantGallery from "./RestaurantGallery";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReviews from "./RestaurantReviews";
import { useParams } from "react-router-dom";
import { restaurants } from "../../constants/index";



export default function RestaurantInfo() {
  const [foods, setFoods] = useState(restaurants);
  const {cardId} = useParams();
  console.log(foods);
  const card = restaurants.find((c) => c.id === parseInt(cardId));
  console.log(card);
// console.log(cardId);
  

  return (
    <section className=" bg-white w-[80%] mx-[10%] rounded-t-md mt-[-20%] mb-[10%] px-[10%] pt-4 pb-[5%] font-lato">
      <RestaurantDescription  data={card} />
      <Experiences />
      <RestaurantGallery />
      <RestaurantMenu />
      <RestaurantReviews />
    </section>
  );
}
