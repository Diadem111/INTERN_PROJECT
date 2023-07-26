import React from "react";
import { ModalwithInfo } from "./ModalwithInfo";
import confirm from "../../assets/confirm.pdf";
export const ModalData = () => {
  return (
    <section
      className=" bg-white
    rounded-lg 
    overflow-hidden shadow-lg lg:h-[80vh] h-[65vh]
     flex justify-center items-center
     "
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >

      <div className="">
        <ModalwithInfo pdfUrl={confirm} />
      </div>
    </section>
  );
};
