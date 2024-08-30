import styles from "./Style.module.css";
import Form from './Form'

const SidePhoto = () => {
    return (
        <div className={styles.main}>
            <div className={styles.photo_main}>
                <div className={styles.block_box}>
                    <div className={styles.box}>
                        <p className={styles.heading}>
                            SUMMER BY EQUINOX
                        </p>
                        <p className={styles.para}>
                            Iconic Locations. Unparalleled Experiences.
                            Unbeatable Results. Join Today.
                        </p>
                    </div>
                    <div className={styles.logo}>
                        EQUINOX
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default SidePhoto;