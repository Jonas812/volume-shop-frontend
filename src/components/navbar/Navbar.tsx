import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

interface Category {
    gender?: string;
    categoryRoute?: string;
    categoryName?: string;
}

const categories: Category[] = [
    {
        gender: "MEN",
        categoryRoute: "/men/jeans",
        categoryName: "Jeans"
    },
    {
        gender: "MEN",
        categoryRoute: "/men/shirts",
        categoryName: "Shirts"
    },
    {
        gender: "MEN",
        categoryRoute: "/men/shorts",
        categoryName: "Shorts"
    },
    {
        gender: "MEN",
        categoryRoute: "/men/shirts",
        categoryName: "Accesoires"
    },
    {
        gender: "MEN",
        categoryRoute: "/men/shorts",
        categoryName: "Beachwear"
    },
    {
        gender: "WOMEN",
        categoryRoute: "/women/headwear",
        categoryName: "Headwear"
    },
    {
        gender: "WOMEN",
        categoryRoute: "/women/shirts",
        categoryName: "Shirts"
    },
    {
        gender: "WOMEN",
        categoryRoute: "/women/knits",
        categoryName: "Knits"
    },
    {
        gender: "ACCESOIRES",
        categoryRoute: "/accesoires/glasses",
        categoryName: "Glasses"
    },    
    {
        gender: "ACCESOIRES",
        categoryRoute: "/accesoires/jewelry",
        categoryName: "Jewelry"
    }
];

const Navbar = () => {
    const [hoveredText, setHoveredText] = useState<string | null>(null);
    const [isHoveringCategory, setIsHoveringCategory] = useState(false);

    const handleMouseEnter = (text: string) => {
        setHoveredText(text);
        setIsHoveringCategory(false); // Zurücksetzen, falls der Mauszeiger über einen Link bewegt wird
    };

    const handleMouseLeave = () => {
        setIsHoveringCategory(true); // Setzen, dass der Mauszeiger über dem kategorieContainer ist
    };

    const handleCategoryMouseEnter = () => setIsHoveringCategory(true);
    const handleCategoryMouseLeave = () => {
        setIsHoveringCategory(false); // Zurücksetzen, wenn der Mauszeiger den kategorieContainer verlässt
        setHoveredText(null); // Zurücksetzen des gehoverten Texts
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.navbarContainer}>
                <Link to="/" onMouseEnter={handleCategoryMouseLeave}>
                    <img src="./public/volume.svg" alt="volume" className={styles.logo} />
                </Link>

                <div className={styles.navbarTextContainer}>
                    <Link 
                        to="/men" 
                        className={styles.navbarText} 
                        onMouseEnter={() => handleMouseEnter('MEN')} 
                        onMouseLeave={handleMouseLeave}
                    >
                        MEN
                    </Link>
                    <Link 
                        to="/women" 
                        className={styles.navbarText} 
                        onMouseEnter={() => handleMouseEnter('WOMEN')} 
                        onMouseLeave={handleMouseLeave}
                    >
                        WOMEN
                    </Link>
                    <Link 
                        to="/accesoires" 
                        className={styles.navbarText}
                        onMouseEnter={() => handleMouseEnter('ACCESOIRES')} 
                        onMouseLeave={handleMouseLeave}
                    >
                        ACCESOIRES
                    </Link>
                </div>

                <div className={styles.navbarIconContainer}>
                    <button className={styles.iconBtn} onMouseEnter={handleCategoryMouseLeave}>
                        <img src="./public/searchIcon.svg" alt="search" className={styles.navbarIcon} />
                    </button>

                    <Link to="/cart" onMouseEnter={handleCategoryMouseLeave}>
                        <img src="./public/cartIcon.svg" alt="cart" className={styles.navbarIcon} />
                    </Link>
                </div>
            </div>
            {(hoveredText || isHoveringCategory) && (
                <span className={styles.flexColumn}>
                    <div 
                        className={styles.kategorieContainer}
                        onMouseEnter={handleCategoryMouseEnter}
                        onMouseLeave={handleCategoryMouseLeave}>
                        <p className={styles.categoryNameBox}>{hoveredText}</p>

                            <div className={styles.kategoriesBox}>
                                {categories
                                .filter(category => category.gender === hoveredText)
                                .map((category, index) => (
                                    <Link key={index} to={category.categoryRoute as string} className={styles.navbarText}>
                                        {category.categoryName}
                                    </Link>
                                    ))
                                }
                            </div>
                    </div>
                    
                    <hr className={styles.categorieHr}></hr>
                </span>
            )}
        </div>
    );
};

export default Navbar;
