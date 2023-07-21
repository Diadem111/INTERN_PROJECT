import React from "react";
import { LandingpageImg } from "../components/landingpage/landingInfo";
import styles from "../style";
export const LandingPage = () => {
  return (
    <div className="bg-[#FEFCF2] w-full overflow-hidden ">
      <div className={`${styles.boxWidth}`}>
        <LandingpageImg />
      </div>
    </div>
  );
};
