import { useState } from "react";
import styles from "./Personal.module.css";
import Photo1 from "/PERSONAL/Coaches.jpg";
import Photo2 from "/PERSONAL/Engineering.jpg";
import Photo3 from "/PERSONAL/Equifit.jpg";
import Photo4 from "/PERSONAL/OS.jpg";

const PersonalBox = () => {
    const [accordion, setAccordion] = useState(1);

    const Arr = [
        {
            id: 1,
            name: "Our Coaches",
            para: "Armed with advanced education, equipment, and training, Equinox Coaches are the exponent in maximizing potential and pushing human performance forward. Certified by the Equinox Fitness Training Institute, every Coach is a fitness leader with extensive experience across the EXQ OS and MNR (Movement. Nutrition. Regeneration.) ",
            photo: Photo1,
        },
        {
            id: 2,
            name: "Engineered Results",
            para: "Trained, educated, and backed by our Health Advisory Board, Equinox Coaches are certified to develop programs for total body conditioning, specialized needs, and advanced health optimization.",
            photo: Photo2,
        },
        {
            id: 3,
            name: "The EQX OS",
            para: "The newly developed EQX OS is a seismic shift in full health optimization. This one-of-a-kind six-point proprietary protocol decodes human potential, unlocking the true peaks of performance.",
            photo: Photo3,
        },
        {
            id: 4,
            name: "The Equifit",
            para: "Equifit is the first step in understanding and maximizing your potential. Equinox certified Coaches use this assessment protocol to develop performance plans tailored to individual need, want, and goal. Equifit assessments can be done every six months to track improvement and tailor programs during the lifelong fitness journey.",
            photo: Photo4,
        },
    ];

    const changeAccordion = (id) => {
        setAccordion(id);
    };

    return (
        <div className={styles.box2}>
            <div className={styles.inner_box}>
                <div className={styles.accordin}>
                    <div className={styles.accordin_heading}>
                        <p>THE EQUINOX DIFFERENCE</p>
                    </div>
                    <div className={styles.accordin_box}>
                        {Arr.map(({ id, name, para }) => (
                            <div key={id} onClick={() => changeAccordion(id)} className={styles.accordion_item}>
                                <p className={styles.accordin_title}>
                                    {name}
                                </p>
                                <hr className={styles.accordin_line} />
                                {id === accordion && (
                                    <p className={styles.accordin_content}>
                                        {para}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.photo}>
                    <img src={Arr.find(item => item.id === accordion).photo} alt="loading............." />
                </div>
            </div>
        </div>
    );
};

export default PersonalBox;
