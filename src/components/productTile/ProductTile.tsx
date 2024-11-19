import styles from './ProductTile.module.css';


interface ProductTileProps {
    productId: number; // productId muss vom Typ 'number' sein
}

const ProductTile: React.FC<ProductTileProps> = ({ productId }) => {
    return (
        <div>
            <img src='pulloverKnit.png' id={styles.productTileContainer} />
            <div id={styles.productInformationContainer}>
                <span>{productId}</span>
                <span className={styles.productInformationRight}>332gs/m</span>
                <span>Winter 2023</span>
                <span className={styles.productInformationRight}>90€</span>
            </div>
        </div>
    );
};

export default ProductTile;