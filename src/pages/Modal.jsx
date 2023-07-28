import React from "react";
// import { ModalData } from "../components";
import styles from "../style";

export const Modal = () => {
  return (
    <div className=" overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <ModalData />
      </div>
    </div>
  );
};
