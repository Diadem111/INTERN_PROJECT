import React, {useState, useEffect} from 'react';
import styles from '../style';
import "../index.css";

// import {seconddesign, thirddesign} from "../assets";
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 
    justify-between items-center navbar'>
    <div className='flex justify-center items-center '>
    <img src="../project.png" alt='scribelogo' className='w-[50px] h-[32px] px-1'/>
    <div>
      <h3 className='logo'>TableScribe</h3>
    </div>
    </div>
    <ul className='list-none sm:flex hidden justify-end items-center
    flex-1'>
     {navLinks.map((nav,index) => {
      <li 
      key={nav.id} 
      className={` 
      font-normal 
      cursor-pointer text-[16px] ${index === navLinks.length -
      1  ? 'mr-0' : 'mr-2' }
       text-white`}>
        <a href={`#${nav.id}`}>
          {nav.title}
        </a>

      </li>
     })}
    </ul>
    </nav>
  )
}

export default Navbar;