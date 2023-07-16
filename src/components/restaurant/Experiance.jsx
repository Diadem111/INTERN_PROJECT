import MenuCard from "./MenuCard";
import { Menus } from "../../constants";
import ButtonWithPopup from "../ButtonWithPopup";

export default function Experience() {
  return (
    <div>
      <div className="mb-4 font-bold  text-xl">Experiences</div>
      <hr className="mb-2 bg-slate-500 w-full" />
      <div className="flex flex-col items-center">
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
        <ButtonWithPopup />
      </div>
    </div>
  );
}
