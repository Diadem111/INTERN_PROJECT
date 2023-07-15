import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../../style";
import { cash, cutlery, magnifyingGlass } from "../../assets";

export default function RestaurantDescription() {
  let index = 1; //Index of each star staring from 1
  return (
    <div>
      <nav className="flex flex-col items-center">
        <div className="grid grid-cols-5 my-2 w-full">
          <button className={styles.restaurantNav}>Overview</button>
          <button className={styles.restaurantNav}>Experiences</button>
          <button className={styles.restaurantNav}>Gallery</button>
          <button className={styles.restaurantNav}>Menu</button>
          <button className={styles.restaurantNav}>Reviews</button>
        </div>
        <hr className="mb-2 bg-slate-500 w-full" />
      </nav>
      <div className="grid grid-cols-4">
        <span className="text-[#BCA78C] grid grid-cols-11 justify-center items-center">
          <span className="flex col-start-2 items-center">
            {[...Array(5)].map((key) => {
              return (
                <label key={key}>
                  <FaStar size={17} className="star" color="#BCA78C" />
                </label>
              );
            })}
          </span>
          <span className="col-start-8">4.0</span>
        </span>
        <span className="grid grid-cols-4 col-start-2 items-center p-1">
          <span className="grid col-start-1 justify-center">
            <img className="h-full w-11/12" src={cutlery} alt="Cutlery" />
          </span>
          <span className=" col-start-2 col-span-3 font-semibold">
            Special Dishes
          </span>
        </span>
        <span className="grid grid-cols-4 col-start-3 items-center p-1">
          <span className="grid col-start-1 justify-center">
            <img className="h-full w-11/12" src={cash} alt="Cash" />
          </span>
          <span className=" col-start-2 col-span-3 font-semibold">
            Less Than 5k
          </span>
        </span>
        <span className="grid grid-cols-4 col-start-4 items-center">
          <span className="grid col-start-1 justify-center">
            <img
              className="h-full w-11/12"
              src={magnifyingGlass}
              alt="Magnifying Glass"
            />
          </span>
          <span className=" col-start-2 col-span-3 font-semibold whitespace-nowrap">
            Comfortable Space
          </span>
        </span>
      </div>
      <p className=" font-medium text-lg mt-6 mb-12">
        Coco Asia, located in the heart of Rushden Lakes shopping development,
        is a calm oasis for shoppers to take a break and enjoy breakfast, lunch,
        dinner and everything in between. From cosy booths to larger sharing
        tables, the atmosphere is warm and friendly and you’ll be well looked
        after from the moment you walk through the door
      </p>
    </div>
  );
}