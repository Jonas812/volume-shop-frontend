import styles from './ProductsGrid.module.css';
import ProductTile from '../productTile/ProductTile';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productService from '../../services/productService';

const ProductsGrid = () => {
    const [products, setProducts] = useState<any[]>([]);
    const location = useLocation();

    const url: string = location.pathname;

    const allProducts = productService.getAllProducts();

    return (
        <div id={styles.productsGridContainer}>
            {products.map((product) => (
                <ProductTile productId={product.id}></ProductTile>
            ))}
        </div>
    );
};

export default ProductsGrid;