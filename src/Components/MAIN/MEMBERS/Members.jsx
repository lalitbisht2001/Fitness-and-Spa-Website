import { NavLink } from "react-router-dom";
import styles from "./Members.module.css";
import Swimming from "/PHOTO/Swimmingpool.jpg";
const Members = () => {
    return (
        <div className={styles.member}>
            <img src={Swimming} alt="loading...." className={styles.swimming_img} />
            <div className={styles.box}>
                <p className={styles.heading}>Membership With Benefits</p>
                <p className={styles.para}>
                    Unlimited Signature classes. Unparalleled Personal Training.
                    Studios that inspire you to perform.
                </p>
                <NavLink to='/membership' className={styles.btn}>Explore Membership Benefits</NavLink>
            </div>
        </div>
    )
}

export default Members;
