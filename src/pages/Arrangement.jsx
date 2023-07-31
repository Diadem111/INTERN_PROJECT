import React from "react";
import styles from "../style";
import ArrangementHero from "../components/arrangement/arrangementHero";
import SeatingModal from "../components/modal/SeatingModal"
const Arrangement = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className={` ${styles.flexCenter}`}>
        {/* <SeatingModal /> */}
      </div>
    </div>
  );
};

export default Arrangement;
