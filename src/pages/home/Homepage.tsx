import styles from "./Homepage.module.css"
import ProductSlider from "../../components/productSlider/ProductSlider"
import { useState } from "react";
import { Link } from 'react-router-dom';

function Homepage() {
  
    return (
      <>
        <div className={styles.banner}>
          <div id={styles.innerBannerContainer}>
            <div id={styles.bannerTextBox}>
              <span className={styles.lightHeaderText} id={styles.collectionBannerHeader}>New Arrivals</span>
              <span className={styles.lightRegularText} id={styles.collectionBannerText}>Winter 2024</span>
           
              <div id={styles.buttonBox}>
              <Link className={styles.link} to="/">
                <button className={styles.accentButton}>
                Watch here</button>
              </Link>
              </div>
            </div>

          </div>
        </div> 

        <div className={styles.shippingBannerContainer}>
            <div className={styles.shippingBanner}>
                <span className={styles.regularText}>KOSTENLOSER VERSAND ÜBER 99€</span>
                <span className={styles.smallText}>Mindestbestellwert 20€</span>
            </div>
        </div>
        <ProductSlider></ProductSlider>
      </>
    )
  }
  
  export default Homepage
  