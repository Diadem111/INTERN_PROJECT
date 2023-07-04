import React from 'react';
import styles from "../style";
import "../index.css";

export const Hero = () => (
  <section id="home" className={`
  flex md:flex-row flex-col ${styles.paddingY
  }`}>
  <div className={`flex-1 ${styles.flexStart}
  flex-col xl:px-0 sm:px-16 px-6 `}>
  {/* <div className='flex flex-row 
  items-center py-[6px] px-4 
  bg-discount-gradient rounded-[10px] mb-2 '>

  </div> */}

   <div className='flex flex-row
   justify-between items-center w-full'>
     <div>
     <h1 className='flex-1 font-zodiak text-[64px] font-normal
     font-semibold leading-normal typo'
     >
      Your One Touch {" "}
      <br className='sm:block
      hidden'/> {" "}
      <span> To Perfect</span> {" "}
      <br/>
      Dining...
     </h1>
     </div>
     <div>fffff</div>
   </div>
  </div>
  </section>
)
