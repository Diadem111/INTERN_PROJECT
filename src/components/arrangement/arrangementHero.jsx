import React from "react";
// import { LeftShapeCard } from './Shapes';
// import { RightShapeCard } from './Shapes';
// import { TopShapeCard } from './Shapes';
// import { BottomShapeCard } from './Shapes';
// import { BigCard } from './Shapes';
import { Card } from "./Card";

const ArrangementHero = () => {
  return (
    <section
      className="bg-white overflow-hidden
    lg:h-[120vh] h-[80vh] z-10 shadow-lg lg:w-[60%] w-[95%]
     md:w-[90%] sm:px-4 px-4
      justify-center items-center
     flex "
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <Card />
    </section>
  );
};

export default ArrangementHero;
