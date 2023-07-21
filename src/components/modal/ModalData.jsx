import React from 'react';
import { ModalwithInfo } from './ModalwithInfo';

export const ModalData = () => {
  return (
    <section className='bg-purple-600  border-lime-300 overflow-hidden
    h-[120vh] shadow-lg w-[30%] justify-center items-center
     ' style={{marginTop:"10px", marginBottom:"10px"}}>
       <ModalwithInfo/>
    </section>
  )
}
