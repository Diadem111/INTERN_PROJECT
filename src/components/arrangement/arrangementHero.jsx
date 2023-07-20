import React from 'react';
import { LeftShapeCard } from './Shapes';
import { RightShapeCard } from './Shapes';
import { TopShapeCard } from './Shapes';
import { BottomShapeCard } from './Shapes';

const ArrangementHero = () => {
  return (
    <section className='bg-[#FEFCF2]  overflow-hidden justify-center
     flex  text-center items-center '>
         <div className='z-10 grid gap-4 grid-cols-2 '>
            <LeftShapeCard/>
            <RightShapeCard/>
            <TopShapeCard/>
            <BottomShapeCard/>
         </div>
    </section>
  )
}

export default ArrangementHero