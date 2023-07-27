import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router";
import { Card } from "../arrangement/Card";
import SeatingModal from "../modal/SeatingModal";

export default function Seating() {
  const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);
  //  const [selectedShape, setSelectedShape] = useState("");
  //  const [shapeValue, setShapeValue] = useState("");


   const openModal = () => {
    setIsModalOpen(true);
   }

  //  const handleShapeClick = (shape) => {
  //   setSelectedShape(shape);

  //  }

   const closeModal =() => {
    setIsModalOpen(false);
    setShapeValue(selectedShape);
   }

  return (
    <div className="border border-[#010101] p-4 flex max-ss:flex-col justify-between items-center rounded-lg mb-[5%]">
      <span className="font-bold">Seating Preference</span>
    
      <button

        className=" bg-coreYellow py-3 border-none rounded-md h-full"
        onClick= {openModal}
        >
        Choose your Seat
      </button>
      <Card isOpen={isModalOpen} onClose={closeModal}/>
      {/* <ModalwithInfo isOpen={isModalOpen} onClose={closeModal}/> */}
      {/* <ModalData isOpen={isModalOpen} onClose={closeModal}/> */}
    </div>
  );
}
