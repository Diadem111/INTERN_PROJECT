import React, { useState } from "react";
import RestaurantDescription from "./RestaurantDescription";
import Experiences from "./Experiances";
import RestaurantGallery from "./RestaurantGallery";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReviews from "./RestaurantReviews";
import { useParams } from "react-router-dom";
import { restaurants, breakfast, outDoor } from "../../constants/index";

export default function RestaurantInfo() {
  const [foods, setFoods] = useState(restaurants);
  const { column, cardId } = useParams();
  // console.log(foods);
  // const card = restaurants.find((c) => c.id === parseInt(cardId));
  // console.log(card);
  // console.log(cardId);

  let card;
  switch (column) {
    case "column1":
      card = restaurants.find((item) => item.id === parseInt(cardId, 10));
      break;

    case "column2":
      card = breakfast.find((item) => item.id === parseInt(cardId, 10));
      break;

    case "column3":
      card = outDoor.find((item) => item.id === parseInt(cardId, 10));
      break;
    default:
      card = null;
  }

  return (
    <section className=" bg-white w-[80%] mx-[10%] rounded-t-md mt-[-20%]  mb-[10%] px-[10%] pt-4 pb-[5%] font-lato">
      <RestaurantDescription data={card} />
      <Experiences />
      <RestaurantGallery />
      <RestaurantMenu />
      <RestaurantReviews />
    </section>
  );
}
