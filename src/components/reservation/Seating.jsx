import React, {useState} from "react";
import { Card } from "../arrangement/Card";
// import SeatingModal from "../modal/SeatingModal";
import { SelectedSeat } from "../../Atoms";
import { useRecoilValue } from "recoil";




export default function Seating() {
  const Seat = useRecoilValue(SelectedSeat);
  const [seatIsSelected, setSeatIsSelected] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => {
    setSeatIsSelected(true);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
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
