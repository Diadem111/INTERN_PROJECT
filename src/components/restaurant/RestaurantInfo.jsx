import React from "react";
import styles from "../../style";

export default function RestaurantInfo() {
  return (
    <section className=" bg-white w-[80%] mx-[10%] mb-[10%] rounded-t-md mt-[-20%]">
      <nav className="flex flex-col items-center px-[10%]">
        <div className="grid grid-cols-5 mb-2">
          <button className={styles.restaurantNav}>Overview</button>
          <button className={styles.restaurantNav}>Experiences</button>
          <button className={styles.restaurantNav}>Gallery</button>
          <button className={styles.restaurantNav}>Menu</button>
          <button className={styles.restaurantNav}>Reviews</button>
        </div>
        <hr className="mb-2 bg-slate-500 w-10/12" />
      </nav>
    </section>
  );
}
