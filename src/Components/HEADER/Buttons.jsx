import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";
const Buttons = () => {
    return (
        <div className={styles.btn_box}>
            <NavLink to='/alumni' className={styles.btn1}>Alumni</NavLink>
            <NavLink to='/signin' className={styles.btn1}>Sign in</NavLink>
            <NavLink to='/visit-a-club' className={styles.btn2}>Visit a Club</NavLink>
            <NavLink to='/join-online' className={styles.btn3}>Join Online</NavLink>
        </div>
    )
}

export default Buttons;
