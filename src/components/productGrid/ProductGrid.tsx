import styles from './ProductGrid.module.css';
import ProductTile from '../productTile/ProductTile';
import { useEffect, useState } from 'react';
import productService from '../../services/productService';

const ProductsGrid = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
            {products.map((product) => (
                <ProductTile key={product.id} productId={product.id} />
            ))}
        </div>
    );
};

export default ProductsGrid;