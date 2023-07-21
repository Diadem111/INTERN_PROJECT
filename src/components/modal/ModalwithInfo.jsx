import React from "react";
import "./modal.css";

export const ModalwithInfo = () => {
  return (
    <div className=" w-full   h-screen flex items-center justify-center">
      <div
        className="max-w-md w-full bg-white
          rounded-lg shadow-lg p-6  h-[70%] flex flex-col items-center"
      >
        <div>
          <h1
            className="font-lato text-[20px]
         font-bold"
          >
            Wed, 12 Jun 2 guest 17.30pm{" "}
          </h1>
        </div>

        <div className=" h-[280px] md:h-[300px]">
          <div className="relative rounded-full animate-ping bg-coreYellow  mt-14 w-44 h-44 mx-auto mb-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                className="w-14 h-14 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <h2 className="text-3xl font-bold mb-2 font-lato">
            Booking successful
          </h2>
          <p className="font-lato">
            Soon you will receive an SMS or email confirming your booking
            details
          </p>
        </div>

        <div className="mt-1">
          <button className="text-center font-lato p-3">
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
};
