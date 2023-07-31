import "../index.css";
import { Logo, close, logo, menu } from "../assets";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { navLinks } from "../constants";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <nav
      className="bg-[#FEFCF2] px-[8%] w-full flex py-6 justify-between
     items-center navbar border-b-primary"
    >
      <div className="flex justify-center items-center gap-1">
        <img
          src={Logo}
          alt="TableScribe logo"
          className="w-[50px] h-[49px] px-1"
        />
        <div>
          <h3 className="logo text-[32px] font-bold ">TableScribe</h3>
        </div>
      </div>
      <ul
        className="list-none sm:flex hidden
       justify-end items-center flex-1  gap-4 text-black  hover:text-yellow-400 "
      >
        {navLinks.map((nav, index) => (
          <div
            key={nav.id}
            style={{
              border:
                index === navLinks.length - 1
                  ? "12px solid  rounded #EDC453"
                  : "none",
              backgroundColor:
                index === navLinks.length - 1 ? "#EDC453" : "transparent",
              borderRadius: index === navLinks.length - 1 ? "5px" : "0",
              padding: index === navLinks.length - 1 ? "8px" : "0",
              fontFamily: index === navLinks.length - 1 ? "Lato" : "Lato",
              cursor: index === navLinks.length - 1 ? "pointer" : "pointer",
              // Font: index === navLinks.length - 1 ? "bold" : "bold",
              transition:
                index === navLinks.length - 1
                  ? "all 0.3s ease 0s"
                  : "all 0.3s ease 0s",
            }}
            className={`font-lato cursor-pointer 
            text-[18px] text-black 
       ${index === navLinks.length - 1 ? "mr-0" : "mr-7"}
       text-white`}
          >
            <button
              className={
                "text-black  " +
                (nav.id == "Book a Table"
                  ? "hover:text-white"
                  : "hover:text-yellow-400")
              }
              onClick={(event) => {
                nav.id == "Book a Table"
                  ? navigate("/gallery")
                  : nav.id == "Gallery"
                  ? navigate("/gallery")
                  : handleClick(event);
              }}
            >
              {nav.title}
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
        ))}
      </ul>

      {/* create for mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center  z-10">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] 
        object-contain bg-white text-primary "
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6  absolute top-20
           right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul
            className="list-none flex flex-col
           justify-end items-center flex-1 text-white  hover:text-yellow-400  bg-white p-2"
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal font-poppins cursor-pointer
                 hover:text-yellow-400 text-[16px]
                text-bold text-white
              ${index === navLinks.length - 1 ? "mr-0" : "mb-4 "}text-primary`}
              >
                <a
                  href={`#${nav.id}`}
                  className="text-primary hover:text-yellow-400"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
