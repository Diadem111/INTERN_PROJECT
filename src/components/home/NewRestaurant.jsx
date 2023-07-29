import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import styles from "../../style";
import { restaurants } from "../../constants";
import "../../index.css";
import { FaStar } from "react-icons/fa";

const NewRestaurant = () => {
  // console.log(restaurants);
  const [foods, setFoods] = useState(restaurants);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  return (
    <section className="p-4 py-16 m-auto ">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="res hover:bg-yellow-200">New Restaurants</h2>
        </div>
        <div>
          <p
            className="res2  hover:bg-yellow-200 font-lato font-normal
      text-[20px] leading-5  "
          >
            see Menu
          </p>
        </div>
      </div>
      {/* done with res part */}
      {/* display foods */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className=" shadow-2xl 
          rounded-lg hover:scale-105 duration-300 bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[292px] h-[162px] object-cover
               rounded-t-lg lightgray 50%"
            />
            <div className="mx-2 pt-1 font-semibold text-[20px]">
              <p>{item.name}</p>
              <span className="flex pt-2">
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
              </span>
              <div className="h-[130px]">
                <p className="tes pt-1">{item.text}</p>
              </div>
              <section className=" ">
                <button
                  onClick={() => {
                    navigate("restaurants");
                  }}
                  className="butq button mt-2 mb-2"
                >
                  {item.category}
                </button>
              </section>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewRestaurant;
