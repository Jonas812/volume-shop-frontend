import styles from "./Homepage.module.css"
import ProductSlider from "../../components/productSlider/ProductSlider"
import { useState } from "react";

function Homepage() {
  
    return (
      <>
        <div className={styles.banner}>
          <div id={styles.innerBannerContainer}>
            <div id={styles.bannerTextBox}>
            <span className={styles.lightHeaderText} id={styles.collectionBannerHeader}>Lookbook</span>
              <span className={styles.lightRegularText} id={styles.collectionBannerText}>Winter 2024</span>
           
            </div>
            <div id={styles.buttonBox}>
              <button className={styles.accentButton}>MEN</button>
              <button className={styles.accentButton}>WOMEN</button>
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
  