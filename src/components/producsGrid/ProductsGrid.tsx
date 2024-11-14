import styles from './ProductsGrid.module.css';
import ProductTile from '../productTile/ProductTile';
import { useLocation } from 'react-router-dom';

const ProductsGrid = () => {
    const location = useLocation();
  
    const currentPath = location.pathname


    return (
        <div>
            <p>test</p> //TODO BUG 
            <p>test</p>
            {currentPath}
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
        </div>
    );
};

export default ProductsGrid;