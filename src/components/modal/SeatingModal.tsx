import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  aspectRatio: 1 / 1,
};
interface props {
  isOpen: boolean;
  handleClose: VoidFunction;
}

export default function BasicModal({ isOpen, handleClose }: props) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="grid grid-cols-3 grid-rows-4">
          <div className="col-start-2 flex flex-col justify-between items-center">
            <div>Outdoor area</div>
            <button className="button w-full h-2/3"></button>
          </div>
          <div className="col-start-1 row-start-2">
            <button></button>
          </div>
          <div className="col-start-2 row-start-2">
            <button></button>
          </div>
          <div className="col-start-3 row-start-2">
            <button></button>
          </div>
          <div className="col-start-1 row-start-3">
            <button></button>
          </div>
          <div className="col-start-2 row-start-3">
            <button></button>
          </div>
          <div className="col-start-3 row-start-3">
            <button></button>
          </div>
          <div className="col-start-2 row-start-4">
            <button></button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
