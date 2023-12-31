import "./Modal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { SelectedSeat } from "../../Atoms";
import { useSetRecoilState } from "recoil";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface props {
  isOpen: boolean;
  handleClose: VoidFunction;
}
const width = 100;
export default function BasicModal({ isOpen, handleClose }: props) {
  const setSelectedSeat = useSetRecoilState(SelectedSeat);
  const md = useMediaQuery("(min-width:1060px)");
  const mds = useMediaQuery("(min-width:900px)");
  const sm = useMediaQuery("(min-width:768px)");
  const ss = useMediaQuery("(min-width:620px)");
  const xs = useMediaQuery("(min-width:480px)");

  const ModalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: md
      ? "45%"
      : mds
      ? "55%"
      : sm
      ? "75%"
      : ss
      ? "85%"
      : xs
      ? "95%"
      : "90%",
    height: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
    paddingTop: 1.5,
    paddingBottom: sm ? 3 : 1.5,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    aspectRatio: 1 / 1,
    display: "grid",
    // gridTemplateColumns: "30% 40% 30%",
    // gridTemplateRows: "20% 60% 20%",
  };

  // Get the value of the selected seat
  function SetSeat(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLButtonElement;
    setSelectedSeat(target.value);
    handleClose();
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle} className="">
          <div className="h-full w-full grid grid-cols-[30%_40%_30%] grid-rows-[20%_40%_20%]">
            <div className="col-start-2 flex flex-col justify-center items-center ">
              {/* Selectors for the outdoor area */}
              <div>Outdoor area</div>
              <button
                value="Outdoor area"
                onClick={(e) => SetSeat(e)}
                className="w-full text-sm p-8 rounded-full SeatingBtn block"
              ></button>
            </div>
            {/* Selectors for the Window area */}
            <div className="flex items-center justify-center col-start-1 row-start-2 row-span-2">
              <div className=" -rotate-90 whitespace-nowrap w-1/3">
                Window Area
              </div>
              <div className="grid grid-rows-2 justify-between  gap-2 h-full">
                <button
                  value="Window Area"
                  onClick={(e) => SetSeat(e)}
                  className="-rotate-180 text-sm p-8 rounded-full SeatingBtn block"
                ></button>
                <button
                  value="Window Area"
                  onClick={(e) => SetSeat(e)}
                  className="-rotate-180 text-sm p-8 rounded-full SeatingBtn block"
                ></button>
              </div>
            </div>
            {/* Selectors for the Centre area */}
            <div className="flex flex-col justify-center items-center col-start-2 row-start-2 row-span-2">
              <div className="flex flex-col h-full justify-center items-center col-start-3 row-start-2">
                <div className="h-full w-full flex place-items-center">
                  <button
                    style={{ width: "100%", height: width * 0.8 }}
                    value="Centre Area"
                    onClick={(e) => SetSeat(e)}
                    className="w-full h-4/5 rounded-full SeatingBtn block"
                  ></button>
                </div>
                <div>Centre Area</div>
                <div className="h-full w-full flex place-items-center">
                  <button
                    style={{ width: "100%", height: width * 0.8 }}
                    value="Centre Area"
                    onClick={(e) => SetSeat(e)}
                    className="w-full h-full rounded-full SeatingBtn block"
                  ></button>
                </div>
              </div>
            </div>
            {/* Selectors for the Wall area */}
            <div className="flex items-center justify-center col-start-3 row-start-2 row-span-2">
              <div className="grid grid-rows-2 justify-between gap-2 h-full">
                <button
                  value="Wall Area"
                  onClick={(e) => SetSeat(e)}
                  className="-rotate-180 text-sm p-8 rounded-full SeatingBtn block"
                ></button>
                <button
                  value="Wall Area"
                  onClick={(e) => SetSeat(e)}
                  className="-rotate-180 text-sm p-8 rounded-full SeatingBtn block"
                ></button>
              </div>
              <div className="-rotate-90 whitespace-nowrap">Wall Area</div>
            </div>
            {/* Selectors for the Rooftop area */}
            <div className="flex flex-col justify-center items-center col-start-2 row-start-4">
              <button
                value="Rooftop"
                onClick={(e) => SetSeat(e)}
                className="w-full text-sm p-8 rounded-full SeatingBtn block"
              ></button>
              <div>Rooftop</div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
