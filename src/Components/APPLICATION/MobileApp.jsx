import { NavLink } from "react-router-dom";
import styles from "./MobileApp.module.css";

const MobileApp = () => {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <p className={styles.heading}>
                    The Equinox+ App
                </p>
                <p className={styles.para}>
                    Get exclusive access to iconic
                    instructors with immersive live and on-demand classes.
                    Wherever you are.
                    Whenever you`re ready.
                </p>
                <div className={styles.btn_box}>
                    <NavLink to='/application' className={styles.btn}>Explore Equinox+ App</NavLink>
                    <hr className={styles.line} />
                </div>
            </div>
        </div>
    )
}

export default MobileApp