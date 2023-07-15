import React from "react";
import MenuCard from "./MenuCard";
import { Menus } from "../../constants";

export default function Experiance() {
  return (
    <div>
      <div className="mb-4 font-bold  text-xl">Experiences</div>
      <hr className="mb-2 bg-slate-500 w-full" />
      {Menus.map((element, key) => (
        <MenuCard
          key={key}
          heading={element.heading}
          price={element.price}
          dateRange={element.dateRange}
          foodDescription={element.foodDecription}
          img={element.img}
        />
      ))}
    </div>
  );
}
