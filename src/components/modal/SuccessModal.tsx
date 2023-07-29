import success from "../../assets/success.gif";
import Modal from "@mui/material/Modal";
import { props } from "./SeatingModal";
import { useNavigate } from "react-router";
import React from "react";
import Box from "@mui/material/Box";

const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  aspectRatio: 1 / 1,
  display: "grid",
};

export default function SuccessModal({ isOpen, handleClose }: props) {
  const navigate = useNavigate();
  const [screenWidth, setWindowSize] = React.useState(window.innerWidth);
  const [imageWidth, setImageWidth] = React.useState(1);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      setImageWidth((): number => {
        return screenWidth > 800
          ? screenWidth * 0.13
          : screenWidth < 800 && screenWidth > 500
          ? screenWidth * 0.12
          : screenWidth * 0.6;
      });
    };
  }, []);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={ModalStyle}>
          <div className={"flex flex-col bg-white gap-8 p-8"}>
            <h1
              className={
                "text-xl text-center font-semibold row-start-1 mt-5 md:text-sm"
              }
            >
              Wed, 12 Jun 2 guest 17.30pm
            </h1>
            <div
              style={{ width: imageWidth }}
              className="flex justify-center self-center row-start-2 "
            >
              <img style={{ width: imageWidth }} src={success} alt="" />
            </div>
            <div className="row-start-3 text-center text-2xl  font-semibold">
              Booking successful
            </div>
            <div className="row-start-4 text-center text-lg px-8">
              <p className="items-center px-4">
                Soon you will receive an SMS or email confirming your booking
                details
              </p>
            </div>
            <div className="flex justify-center row-start-5 ">
              <button
                className="border border-black rounded-md w-max text-center font-lato p-3 500 hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to homepage
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
