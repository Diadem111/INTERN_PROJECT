import Box from "@mui/material/Box";
import success from "../../assets/success.gif";
import Modal from "@mui/material/Modal";
import { props } from "./SeatingModal";
import { useNavigate } from "react-router";
import React from "react";

const screenSize = screen.width;
function setWidth(width: number): string {
  return width > 800 ? "45%" : width < 800 && width > 500 ? "70%" : "95%";
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: setWidth(screenSize),
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  aspectRatio: 1 / 1,
  gridTemplateRows: "20% 40% 5% 13% 22%",
  gridTemplateColumns: "20% 60% 20%",
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
          ? screenWidth * 0.15
          : screenWidth < 800 && screenWidth > 500
          ? screenWidth * 0.1
          : screenWidth * 0.3;
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
      >
        <Box
          sx={style}
          className="grid font-lato justify-center items-center w-[45%] max-mds:w-50%"
        >
          <h1 className="text-center text-xl font-semibold col-start-2">
            Wed, 12 Jun 2 guest 17.30pm
          </h1>
          <div className="flex justify-center w-1/4 row-start-2 col-start-2">
            <img style={{ width: screenWidth * 0.15 }} src={success} alt="" />
          </div>
          <div className="row-start-3 col-start-2 text-center text-2xl  font-semibold">
            Booking successful
          </div>
          <div className="row-start-4 col-start-2 text-center text-lg">
            <p className="items-center">
              Soon you will receive an SMS or email confirming your booking
              details
            </p>
          </div>
          <div className="flex justify-center col-start-2 row-start-5 ">
            <button
              className="border border-black rounded-md w-max text-center font-lato p-3 500 hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to homepage
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
