import React from 'react';
import  {ModalData} from '../components';

export const Modal = () => {
  return (
    
         <div className='w-full overflow-hidden bg-primary' >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       
         <ModalData/>
       </div>
    </div>

    
  )
}
