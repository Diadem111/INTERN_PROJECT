import React, {useState, useEffect} from 'react';
import styles from '../style';
import "../index.css";
import { close, logo, menu } from "../assets";
// import {seconddesign, thirddesign} from "../assets";
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className='w-full flex py-6 
    justify-between items-center navbar'>
    <div className='flex justify-center items-center '>
    <img src="../project.png" alt='scribelogo' className='w-[50px] h-[32px] px-1'/>
    <div>
      <h3 className='logo'>TableScribe</h3>
    </div>
    </div>
    <ul className='list-none sm:flex hidden 
    justify-end items-center
    flex-1  text-black '>
        
     {navLinks.map((nav,index) => (
      <li 
      key={nav.id} 
      style={{
          border:index === navLinks.length -
           1 ? '12px solid  rounded #EDC453' : 'none',
        backgroundColor: index === navLinks.length 
        - 1 ? "#EDC453" : "transparent",
        borderRadius: index === navLinks.length - 
        1 ? "5px" : "0",
        padding: index === navLinks.length - 
        1 ? "10px" : "0",
      }}
      className={` 
      font-normal font-lato
      cursor-pointer text-[16px] text-black
       ${index === navLinks.length
         - 1  ? 'mr-0' : 'mr-5' }
       text-white`}>
        <a href={`#${nav.id}` } className="text-black">
          {nav.title}
        </a>
      </li>
     ))}
    </ul>


    {/* create for mobile */}
    <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img 
        src={toggle ? close : menu }
        alt="menu"
        className='w-[28px] h-[28px] 
        object-contain ' 
        onClick= {() => setToggle((prev) => 
          !prev)}
        />

        <div
         className={`${toggle ? "flex" :
        "hidden"} p-6 bg-black-gradient 
        absolute top-20 right-0 mx-4
        my-2 min-w-[140px] rounded-xl
        sidebar `}
         >
          <ul className='list-none flex flex-col
    justify-end items-center
    flex-1  text-white'>  
            {navLinks.map((nav,index) => (
              <li 
              key={nav.id} 
              className={` 
              font-normal font-poppins
              cursor-pointer text-[16px]
               text-white
              ${index === navLinks.length
                - 1  ? 'mr-0' : 'mb-4 ' }
              text-white`}>
                <a href={`#${nav.id}` } 
                className="text-white">
                  {nav.title}
                </a>
              </li>
            ))}
    </ul>


        </div>
    </div>
    </nav>
  )
}

export default Navbar;