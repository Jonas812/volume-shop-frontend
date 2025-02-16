import React, { useState } from 'react';
import styles from './ProductTile.module.css';

interface ProductTileProps {
    productId: number;
    productImage: string;
    productName: String;
}

const ProductTile: React.FC<ProductTileProps> = ({ productId, productImage, productName }) => {

    const generateRandomOpacity = () => Math.random() * 0.5 + 0.5;

    const randomOpacity = generateRandomOpacity();

    return (
        <div id={styles.outerContainer}>
            {!productImage ? (
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
                    alt="Product"
                />
            )}
            <div id={styles.productInformationContainer}>
                <span>{productName}</span>
                <span className={styles.productInformationRight}>{productId}</span>
            </div>
        </div>
    );
};

export default ProductTile;
