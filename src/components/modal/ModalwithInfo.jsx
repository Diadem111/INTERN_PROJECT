import React, { useState, useEffect } from "react";
import "./modal.css";
// import Pdf from "../../Pdf";
import { Document, Page, pdfjs } from "react-pdf";
import confirm from "../../assets/confirm.pdf";
import { Navigate, useNavigate } from "react-router";
// import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const ModalwithInfo = ({ pdfUrl }) => {
  
  const [numPages, setNumPages] = useState(null);
  const navigate = useNavigate();
  // const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className=" w-full   h-screen flex items-center justify-center">
      <div
        className="max-w-md w-full bg-white
          rounded-lg shadow-lg p-6  h-[70%]
           flex flex-col items-center"
      >
        <div>
          <h1
            className="font-lato text-[20px]
         font-bold"
          >
            Wed, 12 Jun 2 guest 17.30pm{" "}
          </h1>
        </div>

        <div className=" h-[10px] md:h-[10px]">
          {/* <div className="relative rounded-full
            bg-coreYellow
            mt-14 w-44 h-44 mx-auto mb-4">
            <div className="absolute top-1/2 left-1/2
             transform -translate-x-1/2 translate-y-1/2"> */}
          {/* <Pdf/> */}
          <Document
            file={confirm}
            renderMode="canvas"
            className="  animate-pulse"
          >
            <Page pageNumber={1} width={200} height={50} renderTextLayer={false}/>
          </Document>
          {/* <svg
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
              </svg> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className=" text-center lg:mt-48 mt-52 z-10">
          <h2 className="text-3xl font-bold mb-2 font-lato">
            Booking successful
          </h2>
          <p className="font-lato">
            Soon you will receive an SMS or email confirming your booking
            details
          </p>
        </div>

        <div className="lg:mt-1 mt-5 z-10">
          <button
            className="text-center font-lato p-3
          500 hover:bg-gray-100 active:bg-gray-100 focus:outline-none 
          focus:ring focus:ring-gray-300 cursor-pointer"
            onClick={() => {
              navigate("/arrangement/success");
            }}
          >
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
};
