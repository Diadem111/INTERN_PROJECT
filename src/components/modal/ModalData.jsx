import React from 'react';
import { ModalwithInfo } from './ModalwithInfo';

export const ModalData = () => {
  return (
    <section className='bg-purple-600 
     border-lime-300 
    overflow-hidden shadow-lg h-[80vh]
     flex justify-center items-center
     ' style={{marginTop:"10px", marginBottom:"10px"}}>
      
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
               <ModalwithInfo/>
              </div>
      
    </section>
  )
}
