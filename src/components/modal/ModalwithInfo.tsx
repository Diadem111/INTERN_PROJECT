import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalStyle } from "./SeatingModal.js";
import { props } from "./SeatingModal.jsx";
import "./modal.css";
import { Document, Page, pdfjs } from "react-pdf";
import confirm from "../../assets/confirm.pdf";
import { useNavigate } from "react-router";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import React from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const ModalwithInfo = ({ isOpen, handleClose }: props) => {
  const navigate = useNavigate();
  const [screenWidth, setWindowSize] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
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
        <Box sx={ModalStyle} className=" w-max">
          <div className=" w-full h-full flex items-center justify-center col-start-2">
            <div className="w-full bg-white rounded-lg shadow-lg p-6 h-[70%] flex flex-col items-center">
              <h1 className="font-lato text-xl font-bold text-center">
                Wed, 12 Jun 2 guest 17.30pm
              </h1>
              <div className=" h-[10px] md:h-[10px]">
                <Document
                  file={confirm}
                  renderMode="canvas"
                  className="animate-pulse"
                >
                  <Page
                    pageNumber={1}
                    width={screenWidth * 0.15}
                    renderTextLayer={false}
                  />
                </Document>
              </div>
              <div className=" text-center  lg:mt-48 mt-52 z-10">
                <h2 className="text-3xl max-mds:text-xl font-bold mb-2 font-lato">
                  Booking successful
                </h2>
                <p className="font-lato ">
                  Soon you will receive an SMS or email confirming your booking
                  details
                </p>
              </div>

              <div className="lg:mt-1 mt-5 z-10">
                <button
                  className="button text-center font-lato p-3 500 hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to homepage
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
