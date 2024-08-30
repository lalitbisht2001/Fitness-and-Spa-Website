import { NavLink } from "react-router-dom";
import styles from "./Spa.module.css";
import video from "/VIDEO/Spa.mp4";
import SpaBox from "./SpaBox";

const Spa = () => {
    return (
        <>
            <div className={styles.main}>
                <video src={video} autoPlay loop muted className={styles.video}>
                </video>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <p><span>EQUINOX</span>THE SPA</p>
                    </div>
                    <div className={styles.btn}>
                        <NavLink className={styles.btn1}>Sign In</NavLink>
                        <NavLink className={styles.btn1}>YourBag</NavLink>
                        <button className={styles.btn2}>Book</button>
                        <button className={styles.btn3}>Find a Spa</button>
                    </div>
                </div>
            </div>
            <div className={styles.heading_box}>
                <div>
                    <p className={styles.heading}>Regenerate and Elevate Your Performance.</p>
                    <p className={styles.spa}>THE SPA</p>
                </div>
                <button className={styles.btn_box}>Find a Spa</button>
                <p className={styles.service}>Service Menu</p>
            </div>
            <SpaBox />
            
        </>
    )
}

export default Spa
