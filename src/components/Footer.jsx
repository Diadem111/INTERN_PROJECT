import React from "react";
import styles from "../style";
import { footerLinks } from "../constants";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

export const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter}
    ${styles.paddingY} flex-col rounded-xl mt-8
    `}
    >
      <div
        className={`${styles.flexStart} md:flex-row 
      flex-col mb-8 w-full`}
      >
        <div className="flex-1 flex flex-col justify-start ml-10 mt-8">
          {/* <img src='../project.png' alt="image" 
        className='w-[200px] h-[72px] object-contain'/> */}
          <h1 className="text-[26px] font-bold">TableScribe</h1>
          <p
            className={`${styles.para} mt-2 max-w-[310px] font-poppins text-sm`}
          >
            Follow us on our social <br />
            platforms
          </p>
          <div className="flex flex-row mt-3 gap-3">
            <BiLogoFacebook size={30} />
            <FaTwitter size={30} />
            <BiLogoInstagramAlt size={30} />
          </div>
        </div>
        <div
          className="flex-[1.5] w-full flex flex-row gap-20
        justify-center flex-wrap md:mt-0 mt-10
       "
        >
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col 
          ss:my-0 my-4 min-w-[150px]"
            >
              <h1
                className="font-poppins font-medium text-[20px]
           leading-[30px] text-black font-bold"
              >
                {footerLink.title}
              </h1>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px]
              leading-[24px] text-black pt-4 hover:text-yellow-400 cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
