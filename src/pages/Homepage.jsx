import React from 'react';
import styles from '../style';
import { Navbar, Hero, Footer,
       Breakfast,
      NewRestaurant,
  Outdoor,
 } from '../components';
function Homepage() {
  return (
    <div className="bg-white w-full overflow-hidden border-b-purple-300">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* hero section */}
      <div className={` bg-green-600 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NewRestaurant/>
          <Breakfast/>
          <Outdoor/>
        </div>
      </div>


    </div>
  )
}

export default Homepage;