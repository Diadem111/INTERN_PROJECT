import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../../style";
import { cards } from "../../constants";
import "../../index.css";
import { FaStar } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
const Cards = () => {
  // console.log(restaurants);
  const smallScreenBreakPoint = useMediaQuery("(min-width:1200px)");
  const [foods, setFoods] = useState(cards);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <section className="pt-10 py-10 m-auto ">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="res122 font-bold">
            See which restaurants people are raving about
          </h2>
        </div>
        <div>
          <p className="resa1 pt-1  font-light ">From verified diners like you</p>
        </div>
      </div>
      {/* done with res part */}
      {/* display foods */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className={` shadow-2xl  bg-white
          rounded-b-xl hover:scale-105 rounded-[20px] h-max
          duration-300
        ${index !== item.length - 0 ? "mt-10" : "mt-0"} ${
              index == 1 && smallScreenBreakPoint ? " mt-28" : ""
            } `}
            // style={{
            //   marginTop: index !== foods.length - 1 ? "mt-6" : "mb-0",
            // }}
          >
            <div className="flex">
              <div className="imgdiv flex item-center gap-3 pt-4 pl-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100%] h-[100%] object-cover lightgray 50% "
                />
                <div>
                  <div className="w-[150px] flex flex-row text-center mt-6 ">
                    <p className="font-light dd font-lato">{item.name}</p>
                  </div>
                  <div className="flex flex-row gap-2 pt-2">
                    <small className="#BCA78C font-light dd1 font-lato">
                      {item.title}
                    </small>
                    <small className="#BCA78C font-normal dd1 font-lato">
                      {item.reviews}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-1 p-4">
              {/* <p>{item.name}</p> */}
              <span className="flex pt-2 mx-2">
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
              <p className="mx-2 tes pt-4 foot">{item.text}</p>
            </div>
            <div className="dd2 mt-2 rounded-b-lg flex flex-row justify-between">
              <p className="dd mx-5 mt-2 font-lato">{item.category}</p>
              <div>
                <BsHeart size={25} className="mx-5 mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
