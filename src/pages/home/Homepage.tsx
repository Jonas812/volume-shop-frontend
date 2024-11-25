import styles from "./Homepage.module.css"
import ProductSlider from "../../components/productSlider/ProductSlider"

function Homepage() {
  
    return (
      <>
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}/>
        </div>
        <div className={styles.shippingBannerContainer}>
            <div className={styles.shippingBanner}>
                <p>KOSTENLOSER VERSAND ÜBER 99€</p>
                <p id={styles.smallerText}>Mindestbestellwert 20€</p>
            </div>
        </div>
        <ProductSlider></ProductSlider>
      </>
    )
  }
  
  export default Homepage
  