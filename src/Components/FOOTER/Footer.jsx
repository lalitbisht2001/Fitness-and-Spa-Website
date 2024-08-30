import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.box1}>
                    <div className={styles.bar_}>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Pilates Teacher Training</p>
                        <p>Gift Card</p>
                    </div>
                    <div className={styles.bar_}>
                        <p>Contact Us</p>
                        <p>Corporate Membership</p>
                        <p>Member Policies</p>
                        <p>U.K Disclosures</p>
                    </div>
                    <div className={styles.bar_icon}>
                        <div>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        </div>
                    </div>
                </div>
                <div className={styles.box2}>
                    <p>Send Feedback</p>
                    <p>Privacy Policy</p>
                    <p>California Consumer Privacy Statement</p>
                    <p>Do Not Sell or Share My Personal Information</p>
                    <p>Terms & Conditions</p>
                    <p>FAQs</p>
                    <p>Privacy Preference Center</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>
                    Copyright@2024 Developed by <span> Lalit Bisht</span>
                </p>
            </div>
        </>
    )
}

export default Footer;
