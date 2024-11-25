import styles from './ProductGrid.module.css';
import ProductTile from '../productTile/ProductTile';
import { useEffect, useState } from 'react';
import productService from '../../services/productService';
import { useLocation } from 'react-router-dom';

const ProductsGrid = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const allProducts = await productService.getAllProducts();
                setProducts(allProducts);
            } catch (err) {
                setError("Failed to load products. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);


    //TODO
    if (isLoading) {
        return <div>Loading products...</div>;
    }
    //TODO
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div id={styles.productsGridContainer}>
            <div id={styles.productsGridHeader}>
                <span id={styles.productsGridLeft}>
                    <span  id={styles.path}>{path.toUpperCase().substring(1).replace("/", ", ").replace("-", " ")}</span>
                    <div id={styles.filterBtn}>
                        SHOW FILTER
                    </div>
                </span>
                <div id={styles.orderBtn}>
                    ORDER BY
                </div>
            </div>
            <div id={styles.productsGrid}>
                {products.map((product) => (
                    <ProductTile key={product.id} productId={product.id} productImage={product.cover} />
                ))}
            </div>
        </div>
    );
};

export default ProductsGrid;