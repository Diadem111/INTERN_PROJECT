import React, { useState, useEffect } from "react";
import styles from "../../style";
import { cards } from "../../constants";
import "../../index.css";
import { FaStar } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
const Cards = () => {
  // console.log(restaurants);
  const [foods, setFoods] = useState(cards);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <section className="p-4 py-10 m-auto ">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="res hover:bg-gray-700 font-bold">
            See which restaurants people are raving about
          </h2>
        </div>
        <div>
          <p className="res11 hover:bg-gray-700 font-light ">
            From verified diners like you
          </p>
        </div>
      </div>
      {/* done with res part */}
      {/* display foods */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index.name}
            className={` shadow-2xl 
          rounded-b-xl hover:scale-105 rounded-[20px]
          duration-300 h-[300px] 
        ${index !== item.length - 0 ? "mt-10" : "mt-0"}  `}
            // style={{
            //   marginTop: index !== foods.length - 1 ? "mt-6" : "mb-0",
            // }}
          >
            <div className="flex  ">
              <div className="imgdiv flex item-center  gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100%] h-[100%] object-cover lightgray 50% "
                />
                <div>
                  <div className="w-[150px] flex flex-row text-center mt-6 ">
                    <p className="font-light dd">{item.name}</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <small className="#BCA78C font-light dd1">
                      {item.title}
                    </small>
                    <small className="#BCA78C font-normal dd1">
                      {item.reviews}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-1">
              {/* <p>{item.name}</p> */}
              <span className="flex pt-2 mx-2">
                {[...Array(5)].map((star) => {
                  const currentRating = index + 1;
                  return (
                    <label>
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
                        onmouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </span>
              <p className="mx-2 tes pt-1">{item.text}</p>
              <div className="dd2 mt-2 mb-2 rounded-b-lg  flex flex-row justify-between">
                <p className="dd mx-5 mt-2">{item.category}</p>
                <div>
                  <BsHeart size={25} className="mx-5 mt-2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
