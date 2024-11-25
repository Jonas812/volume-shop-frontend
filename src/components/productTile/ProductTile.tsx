import React, { useState } from 'react';
import styles from './ProductTile.module.css';

interface ProductTileProps {
    productId: number;
    productImage: string;
}

const ProductTile: React.FC<ProductTileProps> = ({ productId, productImage }) => {
    const [imgError, setImgError] = useState(false);

    const generateRandomOpacity = () => Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1

    const randomOpacity = generateRandomOpacity();

    return (
        <div>
            {imgError ? (
                <div
                    className={styles.placeholderStyle}
                    style={{
                        '--placeholder-bg': `rgba(189, 172, 158, ${randomOpacity})`,
                    } as React.CSSProperties}
                />
            ) : (
                <img
                    src={productImage}
                    id={styles.productTileContainer}
                    onError={() => setImgError(true)}
                    alt="Product"
                />
            )}
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
