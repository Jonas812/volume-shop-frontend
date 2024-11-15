import styles from './ProductTile.module.css';


const ProductTile = () => {
    return (
        <div>
            <img src='pulloverKnit.png' id={styles.productTileContainer} />
            <div id={styles.productInformationContainer}>
                <span>Raw Knit</span>
                <span className={styles.productInformationRight}>332gs/m</span>
                <span>Winter 2023</span>
                <span className={styles.productInformationRight}>90€</span>
            </div>
        </div>
    );
};

export default ProductTile;