import success from "../../assets/success.gif";
import Modal from "@mui/material/Modal";
import { props } from "./SeatingModal";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  aspectRatio: 1 / 1,
  display: "grid",
};

const Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const Week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const dateObj = new Date();
const month = Month[dateObj.getMonth()];
const day = dateObj.getDate();
const weekDay = Week[dateObj.getDay()];
const time = { hour: dateObj.getHours(), minutes: dateObj.getMinutes() };

export default function SuccessModal({ isOpen, handleClose }: props) {
  const navigate = useNavigate();

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
        <Box sx={ModalStyle} className="lg:w-[45%] w-[80%]">
          <div className={"flex flex-col bg-white gap-8 p-8"}>
            <h1
              className={
                "text-xl text-center font-semibold row-start-1 mt-5 md:text-sm"
              }
            >
              <time
                className=" max-xs:flex flex-col text-xl"
                dateTime={dateObj.toString()}
              >
                <span>
                  <span>{weekDay}</span>, <span>{day}</span>
                  <span> {month}</span>
                </span>
                <span> 2 guests </span>
                <span>
                  {time.hour}:<span>{time.minutes}</span>{" "}
                  {time.hour > 12 ? "pm" : "am"}
                </span>
              </time>
            </h1>
            <div className="flex justify-center w-full self-center row-start-2 ">
              <img className=" w-1/2" src={success} alt="" />
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
