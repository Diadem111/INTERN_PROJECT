import React from "react";
import { ModalwithInfo } from "./ModalwithInfo";

export const ModalData = () => {
  return (
    <section
      className=" bg-white
    rounded-lg 
    overflow-hidden shadow-lg h-[80vh]
     flex justify-center items-center
     "
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <div className="">
        <ModalwithInfo />
      </div>
    </section>
  );
};
