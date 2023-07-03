import React from 'react';
import styles from '../style';
import { Navbar, Hero, Footer } from '../components';
function Homepage() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.bo}`}>
          <Navbar />
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          business
          deals
          client
          footer
        </div>
      </div>


    </div>
  )
}

export default Homepage;