import useIsOpen from "../../HOOKS/useIsOpen";
import styles from "./Merge.module.css";
import First from "/VIDEO/First.mp4";

const Merge = () => {
    const [isOpen,] = useIsOpen();

    return (
        <div className={styles.main} style={{ position: isOpen ? "fixed" : "" }}>
            <div className={styles.first_div}>
                <video src={First} autoPlay loop muted className={styles.video}>
                    Your browser does not support the video tag.
                </video>
                <div className={styles.video_heading}>
                    <p className={styles.big_heading}>
                        SUMMER BY EQUINOX
                    </p>
                    <p className={styles.para}>
                        Iconic Locations. Unparalleled Experiences.
                        Unbeatable Results. Join Today.
                    </p>
                    <button className={styles.btn}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Merge;
