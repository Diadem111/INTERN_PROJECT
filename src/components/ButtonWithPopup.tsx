import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="w-full flex justify-center">
      <button
        className="button w-1/2 py-5 active:bg-slate-300 text-lg"
        onClick={handleClick}
      >
        View More
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>Coming soon...</Typography>
      </Popover>
    </div>
  );
}
