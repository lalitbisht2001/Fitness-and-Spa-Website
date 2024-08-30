import { NavLink } from "react-router-dom";
import styles from "./Fitness.module.css";
import Gym from "/VIDEO/Fitness.mp4";
const FitnessMeet = () => {
    return (
        <div className={styles.main}>
            <video src={Gym} autoPlay loop muted className={styles.video}>
            </video>
            <div className={styles.box}>
                <p className={styles.heading}>Where Luxury and Fitness Meet</p>
                <p className={styles.para}>
                    Clubs that deliver an unrivaled
                    experience to maximize your potential,
                    and luxry amenities that keep you
                    performing at your best.
                </p>
                <div className={styles.btn_box}>
                    <NavLink to='/luxry' className={styles.btn}>Find A Club</NavLink>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default FitnessMeet
