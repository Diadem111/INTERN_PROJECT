import React from "react";
import SeatingModal from "../modal/SeatingModal";
import { useNavigate } from "react-router";

export default function Seating() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="border border-[#010101] p-4 flex max-ss:flex-col justify-between items-center rounded-lg mb-[5%]">
      <span className="font-bold">Seating Preference</span>
      <SeatingModal
        className="invisible"
        isOpen={isOpen}
        handleClose={handleClose}
      />
      <button
        className="button bg-coreYellow py-3 border-none rounded-md h-full"
        onClick={handleOpen}
      >
        Choose your Seat
      </button>
    </div>
  );
}
