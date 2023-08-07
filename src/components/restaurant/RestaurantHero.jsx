import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { restaurants, breakfast, outDoor } from "../../constants/index";

export default function RestaurantHero() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState(restaurants);
  const { column, cardId } = useParams();
  // console.log(foods);
  // const card = restaurants.find((c) => c.id === parseInt(cardId));
  // console.log(card);
  // console.log(cardId);

  let card;
  switch (column) {
    case "column1":
      card = restaurants.find((item) => item.id === parseInt(cardId));
      break;

    case "column2":
      card = breakfast.find((item) => item.id === parseInt(cardId));
      break;

    case "column3":
      card = outDoor.find((item) => item.id === parseInt(cardId));
      break;
    default:
      card = null;
  }
  console.log(card);
  let ff = card.text;
  const maxLength = 20;
  const words = ff.split(" ");
  const tContent = words.slice(0, maxLength).join(" ");
  const istContent = words.length > maxLength;
  if (!card) {
    return <div>Card not found</div>;
  }
  return (
    <section className=" bg-restaurant bg-cover bg-no-repeat h-[45rem] max-sm:h-[35rem] max-mds:h-[40rem] mlg:h-[50rem] xl:h-[60rem]">
      <div className="z-10">
        <div className="text-white z-50 flex flex-col items-center gap-8 pt-[14%] w-full h-full ">
          <h1 className="max-xs:text-3xl xs:text-3xl sm:text-6xl font-zodiak font-bold text-center">
            {card.name}
          </h1>
          <p className=" w-1/2 text-center max-xs:text-lg xs:text-base font-lato">
            {tContent} {istContent && "..."}{" "}
          </p>
          <button
            onClick={() => navigate("reservation")}
            id="but"
            className="button text-black"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
