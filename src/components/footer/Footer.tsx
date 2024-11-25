import styles from './Footer.module.css';

const Footer = () => {

    return (
        <div id={styles.footerContainer}>
            <div id={styles.socialsContainer}>
                <div className={styles.socialBox}>
                    <img src="./instagram.svg" alt="" />
                </div>
                
                <div className={styles.socialBox}>
                    <img src="./x.svg" alt="" />
                </div>
                
                <div className={styles.socialBox}>
                    <img src="./youtube.svg" alt="" />
                </div>
            </div>
            <div id={styles.leagalPageLinksConatainer}>
                <span>AGB</span>
                <span>IMPRESSUM</span>
                <span>DATENSCHUTZ</span>
                <span>COMPLIANCE</span>
                <span>FAQ</span>
                <span>KONTAKT</span>
                <span>©2024 Volume</span>
            </div>
            <div id={styles.newsLetterConatainer}>
                
            </div>
        </div>
    );
};

export default Footer;