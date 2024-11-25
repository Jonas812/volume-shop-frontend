import styles from "./Browse.module.css"
import ProductGrid from '../../components/productGrid/ProductGrid';

function Browse() {
  
    return (
      <>
        <div className={styles.tasdad}>
          <ProductGrid></ProductGrid>
        </div>
      </>
    )
  }
  
export default Browse