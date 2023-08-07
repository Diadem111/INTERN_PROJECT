import React,{useState} from "react";
import { calender, cash } from "../../assets";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { restaurants,breakfast,outDoor } from "../../constants/index";
import { Link } from "react-router-dom";

export default function MenuCard({
  heading,
  price,
  dateRange,
  foodDescription,
  img,
}) {
  const navigate = useNavigate();
  const [foods, setFoods] = useState(restaurants);
  const {column, cardId} = useParams();
  // console.log(foods);
  // const card = restaurants.find((c) => c.id === parseInt(cardId, 10));
  // console.log(card);

  let card;
  switch (column) {
    case "column1":
    card = restaurants.find(item => item.id  === parseInt(cardId) );
    break;

    case "column2" :
      card = breakfast.find(item => item.id === parseInt(cardId));
      break;

      case "column3":
        card = outDoor.find(item => item.id === parseInt(cardId));
        break;
        default:
          card = null;
  }
  console.log(card)
  return (
    <div className="grid grid-cols-10 p-5 border border-[#64748B] my-4">
      <div className="flex flex-col col-start-1 mds:col-span-5 col-span-10 gap-3  ">
        <div className="flex">
          <div className="flex flex-col max-ss:justify-centre">
            <h3 className="text-xl font-bold mb-2">{heading}</h3>
            <div className="flex gap-9 col-start-3 items-center p-1">
              <span className="justify-start">
                <img className="h-full w-11/12" src={cash} alt="Cash" />
              </span>
              <span className="font-medium">NGN {price} per person</span>
            </div>
            <div className="flex gap-9 col-start-3 items-center p-1">
              <span className=" justify-start">
                <img className="h-full w-11/12" src={calender} alt="Calender" />
              </span>
              <span className="font-medium">{dateRange}</span>
            </div>
          </div>
          <div className="mds:hidden max-ss:hidden flex justify-center">
            <img className=" w-3/5 rounded-md" src={img} alt="Image of food" />
          </div>
        </div>
        <p className="my-4">{foodDescription}</p>
        <Link to={`/gallery/restaurants/column/${card.id}/reservation`}>
        <button

          id="but"

          
          className="button lg:w-2/5 mds:self-start self-center"

  
        >
          Book a Table
        </button>

        </Link>
             </div>
      <div className="col-start-7 col-span-4 mds:inline hidden">
        <img
          className="h-full w-11/12 rounded-md"
          src={img}
          alt="Image of food"
        />
      </div>
    </div>
  );
}
