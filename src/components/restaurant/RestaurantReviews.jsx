import React from "react";
import ReviewCard from "./ReviewCard";
import { RestaurantReviewData } from "../../constants";

export default function RestaurantReviews() {
  const review1 = RestaurantReviewData[0];
  const review2 = RestaurantReviewData[1];
  return (
    <div>
      <div className="mb-4 font-bold  text-xl">Reviews</div>
      <hr className="mb-[6%] bg-slate-500 w-full" />
      <div className="grid grid-cols-5 grid-rows-2">
        <div className="col-start-1 sm:col-span-3 col-span-5 row-start-1">
          <ReviewCard
            name={review1.name}
            location={review1.location}
            img={review1.img}
            review={review1.review}
          />
        </div>
        <div className="sm:col-start-3 sm:col-span-3 col-span-5 row-start-2">
          <ReviewCard
            name={review2.name}
            location={review2.location}
            img={review2.img}
            review={review2.review}
          />
        </div>
      </div>
    </div>
  );
}
