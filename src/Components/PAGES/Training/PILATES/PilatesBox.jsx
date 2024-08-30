import styles from "./Pilates.module.css";
import { useState } from "react";

const PilatesBox = ({ Arr }) => {

    const [Change, setChange] = useState(1);
    const ChangeBox = (id) => {
        setChange(id);
    }
    return (
        <div className={styles.box2}>
            <div className={styles.accordin}>
                <div className={styles.box_heading}>
                    ABOUT PILATES AT EQUINOX
                </div>
                <div className={styles.box}>
                    {
                        Arr.map(({ name, id, para }) => (
                            <div key={id} onClick={() => ChangeBox(id)} className={styles.single_box}>
                                <p className={styles.index}>
                                    {name}
                                </p>
                                <hr className={styles.photo_line} />
                                {
                                    id === Change && (
                                        <p className={styles.content}>
                                            {para}
                                        </p>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.photo}>
                {
                    <img src={Arr.find((item) => item.id === Change).photo} alt="" className={styles.img} />
                }
            </div>
        </div>
    )
}

export default PilatesBox