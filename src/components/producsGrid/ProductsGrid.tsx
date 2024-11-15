import styles from './ProductsGrid.module.css';
import ProductTile from '../productTile/ProductTile';
import { useLocation } from 'react-router-dom';

const ProductsGrid = () => {
    const location = useLocation();

    const currentPath = location.pathname //TOTO WICHTIG FÜR ANFRAGE ANS BACKEND


    return (
        <div id={styles.productsGridContainer}>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
        </div>
    );
};

export default ProductsGrid;