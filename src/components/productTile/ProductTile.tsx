import styles from './ProductTile.module.css';


const ProductTile = () => {
    return (
        <div>
            <div id={styles.productTileContainer} />
            <div id={styles.productInformationContainer}>
                <span>Mesh Pant</span>
                <span className={styles.productInformationRight}>332gs/m</span>
                <span>Volume 2  Collection</span>
                <span className={styles.productInformationRight}>90€</span>
            </div>
        </div>
    );
};

export default ProductTile;