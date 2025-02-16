import styles from './ProductSlider.module.css';
import ProductTile from '../productTile/ProductTile';
import { useEffect, useState } from 'react';
import productService from '../../services/productService';

const ProductSlider = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [shownProductIndex, setShownProductIndex] = useState<number>(0);

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

    // Handle click on the left arrow (decrement pageIndex)
    const handleLeftArrowClick = () => {
        setShownProductIndex(prevProductIndex => (prevProductIndex > 0 ? prevProductIndex - 1 : 0));
    };

    // Handle click on the right arrow (increment pageIndex)
    const handleRightArrowClick = () => {
        setShownProductIndex(prevProductIndex => (prevProductIndex <= products.length-5 ? prevProductIndex + 1 : 0));
    };

    //TODO
    if (isLoading) {
        return <div>Loading products...</div>;
    }
    //TODO
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div id={styles.productSlider}>
            <img src="./arrowLeft.svg" alt="" onClick={handleLeftArrowClick} className={styles.icon}/>
            <div className={styles.productSliderProducts}>
                {products.slice(shownProductIndex, shownProductIndex+4).map((product) => (
                    <ProductTile key={product.id} productId={product.id} productImage={product.cover} productName={"undefined"}/>
                ))}
            </div>
            <img src="./arrowRight.svg" alt="" onClick={handleRightArrowClick} className={styles.icon} />
        </div>
    );
};

export default ProductSlider;