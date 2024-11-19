import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const navData = [
    {
        category: "MEN",
        subCategories: ["New Arrivals", "Jackets", "Knit", "Shirts", "Pants"],
    },
    {
        category: "WOMEN",
        subCategories: ["New Arrivals", "Jackets", "Knit", "Tops", "Pants", "Dresses"],
    },
    {
        category: "ACCESSOIRES",
        subCategories: ["Bags", "Headwear", "Jewelry"],
    },
];

const Navbar = () => {
    const [category, setCategory] = useState<string | null>(null);

    return (
        <div className={styles.headerContainer}>
            <div className={styles.navbarContainer}>
                <div id={styles.logoContainer}>
                    <Link to="/">
                        <img src="./volume.svg"
                            alt="volume"
                            id={styles.logo}
                            onMouseEnter={() => setCategory(null)} />
                    </Link>
                </div>

                <div className={styles.navbarTextContainer}>
                    {navData.map((item) =>
                        <Link
                            key={item.category} // Ensure each key is unique
                            to={`${item.category.toLowerCase()}`}
                            className={styles.navbarText}
                            onMouseEnter={() => setCategory(item.category)}
                        >
                            {item.category}
                        </Link>
                    )}

                </div>

                <div id={styles.navbarIconContainer}
                    onMouseEnter={() => setCategory(null)}>
                    <span id={styles.searchBox}>
                        <input type="text" id={styles.searchInput} />
                        <img src="./searchIcon.svg" alt="search" className={styles.navbarIcon} />
                    </span>

                    <Link to="/cart" >
                        <img src="./cartIcon.svg" alt="cart" className={styles.navbarIcon} />
                    </Link>

                    <Link to="/profile" >
                        <img src="./userIcon.svg" alt="profile" className={styles.navbarIcon} />
                    </Link>
                </div>
            </div>

            {(category != null) && (
                <div
                    className={styles.kategorieContainer}
                    onMouseLeave={() => setCategory(null)}>
                    <span id={styles.categoryNameBox}></span>

                    <div className={styles.kategoriesBox}>
                        {navData
                            .find((item) => item.category === category)
                            ?.subCategories.map((subCategory, index) => (
                                <Link
                                    key={index}
                                    to={`/${category.toLowerCase()}/${subCategory.toLowerCase().replace(/ /g, "-")}`}
                                    className={styles.navbarText}
                                >
                                    {subCategory}
                                </Link>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
