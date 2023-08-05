import React, {useState} from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { restaurants } from "../../constants/index";

export default function RestaurantHero() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState(restaurants);
  const {cardId} = useParams();
  console.log(foods);
  const card = restaurants.find((c) => c.id === parseInt(cardId));
  console.log(card);
// console.log(cardId);
  if (!card ) {
    return <div>Card not found</div>
  }

  return (
    <section className=" bg-restaurant bg-cover bg-no-repeat h-[45rem] max-xs:h-[35rem]">
      <div className="z-10">
        <div className="text-white z-50 flex flex-col items-center gap-8 pt-[14%] w-full h-full ">
          <h1 className="max-xs:text-4xl xs:text-4xl sm:text-6xl font-zodiak font-bold text-center">
            {card.name}
          </h1>
          <p className=" w-1/2 text-center max-xs:text-sm xs:text-base font-lato">
          {card.text}
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
