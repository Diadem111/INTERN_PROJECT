import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
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
  gridTemplateColumns: "30% 40% 30%",
  gridTemplateRows: "20% 60% 20%",
};
interface props {
  isOpen: boolean;
  handleClose: VoidFunction;
}
const width = 100;
export default function BasicModal({ isOpen, handleClose }: props) {
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
          className="grid grid-cols-[30%_40%_30%] grid-rows-[2em_6em_2em] gap-2"
        >
          <div className="col-start-2 flex flex-col justify-center items-center gap-3">
            <div>Outdoor area</div>
            <button className="w-full text-sm p-8 rounded-full bg-black hover:bg-coreYellow block"></button>
          </div>
          <div className="flex items-center justify-center col-start-1 row-start-2 row-span-2">
            <div className=" -rotate-90 whitespace-nowrap w-1/3">
              Window Area
            </div>
            <div className="grid grid-rows-2 justify-between gap-2 h-full">
              <button className="-rotate-180 text-sm p-8 rounded-full bg-black hover:bg-coreYellow block"></button>
              <button className="-rotate-180 text-sm p-8 rounded-full bg-black hover:bg-coreYellow block"></button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center col-start-2 row-start-2 row-span-2">
            <div className="flex flex-col h-full justify-center items-center col-start-3 row-start-2">
              <div className="h-full w-full flex place-items-center">
                <button
                  style={{ width: "100%", height: width * 0.8 }}
                  className="w-full h-4/5 rounded-full bg-black hover:bg-coreYellow block"
                ></button>
              </div>
              <div>Centre Area</div>
              <div className="h-full w-full flex place-items-center">
                <button
                  style={{ width: "100%", height: width * 0.8 }}
                  className="w-full h-full rounded-full bg-black hover:bg-coreYellow block"
                ></button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-start-3 row-start-2 row-span-2">
            <div className="grid grid-rows-2 justify-between gap-2 h-full">
              <button className="-rotate-180 text-sm p-8 rounded-full bg-black hover:bg-coreYellow block"></button>
              <button className="-rotate-180 text-sm p-8 rounded-full bg-black hover:bg-coreYellow block"></button>
            </div>
            <div className="-rotate-90 whitespace-nowrap">Wall Area</div>
          </div>
          <div className="flex flex-col justify-center items-center col-start-2 row-start-4">
            <button className="w-full text-sm p-8 rounded-full bg-black hover:bg-coreYellow block"></button>
            <div>Rooftop</div>
          </div>
        </Box>
        {/* <Box
          sx={style}
          className="grid grid-cols-[30%_40%_30%] grid-rows-[2em_6em_2em] gap-2"
        >
          <div className="col-start-2 flex flex-col justify-center items-center gap-3">
            <div>Outdoor area</div>
            <button className="w-full text-sm p-5 rounded-full bg-black hover:bg-coreYellow block"></button>
          </div>
          <div className="flex items-center justify-center col-start-1 row-start-2 row-span-2">
            <div className=" -rotate-90 whitespace-nowrap w-1/3">
              Window Area
            </div>
            <div className="grid grid-rows-2 justify-between gap-2 h-full">
              <button className="-rotate-180 text-sm p-5 rounded-full bg-black hover:bg-coreYellow block"></button>
              <button className="-rotate-180 text-sm p-5 rounded-full bg-black hover:bg-coreYellow block"></button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center col-start-2 row-start-2 row-span-2">
            <div className="flex flex-col h-full justify-center items-center col-start-3 row-start-2">
              <div className="h-full w-full">
                <button className="w-full h-full rounded-full bg-black hover:bg-coreYellow block"></button>
              </div>
              <div>Centre Area</div>
              <div className="h-full w-full">
                <button className="w-full h-full rounded-full bg-black hover:bg-coreYellow block"></button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-start-3 row-start-2 row-span-2">
            <div className="grid grid-rows-2 justify-between gap-2 h-full">
              <button className="-rotate-180 text-sm p-5 rounded-full bg-black hover:bg-coreYellow block"></button>
              <button className="-rotate-180 text-sm p-5 rounded-full bg-black hover:bg-coreYellow block"></button>
            </div>
            <div className="-rotate-90 whitespace-nowrap">Wall Area</div>
          </div>
          <div className="flex flex-col justify-center items-center col-start-2 row-start-4">
            <button className="w-full text-sm p-5 rounded-full bg-black hover:bg-coreYellow block"></button>
            <div>Rooftop</div>
          </div>
        </Box> */}
      </Modal>
    </div>
  );
}
