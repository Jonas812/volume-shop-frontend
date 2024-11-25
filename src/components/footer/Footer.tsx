import styles from './Footer.module.css';

const Footer = () => {

    return (
        <div id={styles.footerContainer}>
            <div id={styles.socialsContainer}>
                <div className={styles.socialBox}>
                    <img src="./instagram.svg" alt="" />
                    <span className={styles.socialText}>Instagram</span>
                </div>
                
                <div className={styles.socialBox}>
                    <img src="./x.svg" alt="" />
                    <span className={styles.socialText}>X</span>
                </div>
                
                <div className={styles.socialBox}>
                    <img src="./youtube.svg" alt="" />
                    <span className={styles.socialText}>Youtube</span>
                </div>
            </div>
            <div id={styles.leagalPageLinksConatainer}>
                <span className={styles.leagalPageLink}>AGB</span>
                <span className={styles.leagalPageLink}>IMPRESSUM</span>
                <span className={styles.leagalPageLink}>DATENSCHUTZ</span>
                <span className={styles.leagalPageLink}>COMPLIANCE</span>
                <span className={styles.leagalPageLink}>FAQ</span>
                <span className={styles.leagalPageLink}>KONTAKT</span>
                <span className={styles.leagalPageLink}>©2024 voljon</span>
            </div>
            <img src="footerSchriftzug.svg" alt="" id={styles.footerSchriftzug} />
        </div>
    );
};

export default Footer;