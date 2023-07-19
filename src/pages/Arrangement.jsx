import React from 'react';
import styles from "../style";
import ArrangementHero from '../components/arrangement/arrangementHero';
const Arrangement = () => {
  return (
    <div className='w-full overflow-hidden' >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <ArrangementHero/>
       </div>
    </div>
  )
}

export default Arrangement