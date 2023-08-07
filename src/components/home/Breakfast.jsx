import React, { useState, useEffect } from "react";
import styles from "../../style";
import { breakfast } from "../../constants";
import "../../index.css";
import { FaStar } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Breakfast = () => {
  // console.log(restaurants);
  const [foods, setFoods] = useState(breakfast);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="p-4 py-5 m-auto ">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="res hover:text-yellow-400">Breakfast Favorite</h2>
        </div>
        <div>
          <p
            className="res2  hover:text-yellow-400  
            text-bolder font-lato
      text-[20px]  "
          >
            See Menu
          </p>
        </div>
      </div>
      {/* done with res part */}
      {/* display foods */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((card) => (
          <div
            key={card.id}
            className=" rounded-lg hover:scale-105 duration-300
             hover:rounded-b-2xl hover:shadow-2xl bg-white"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-[292px] h-[162px] object-cover rounded-t-lg lightgray 50%"
            />
            <div className="mx-2 pt-1 font-600 text-[18px] font-lato ">
              <p className="font-bold">{card.name}</p>
              <span className="flex pt-2 flex-row justify-between">
                <div className="justify-center flex">
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                          size={11}
                          className="star"
                          color={
                            currentRating <= (hover || rating)
                              ? "#BCA78C"
                              : "#BCA78C"
                          }
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
                <p className="text-end tex text-[12px] ">{card.review}</p>
              </span>
              <div className="h-[110px] mt-4">
                <p className="tes pt-1">{card.text}</p>
              </div>
              <Link to={`/gallery/restaurants/column2/${card.id}`}>
                <button
                 className="butq button mb-2 text-[12px] hover:text-yellow-100"
                >
                  {card.category}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Breakfast;
