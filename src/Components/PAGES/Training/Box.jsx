import { NavLink } from "react-router-dom";
import Navbar from "../../HEADER/Navbar";
import styles from "./Personal.module.css";

import PersonalBox from "./PersonalBox";
import Footer from "../../FOOTER/Footer.jsx";
const Box = ({ Heading, Para, Box_Heading, Box_Para, Box_Para2, Btn , TrainingVideo}) => {
    return (
        <>
            <Navbar />
            <div className={styles.line}></div>
            <div className={styles.main}>
                <div className={styles.video_div}>
                    <video src={TrainingVideo} autoPlay loop muted ></video>
                    <div className={styles.heading_div}>
                        <p className={styles.heading}>
                            {Heading}
                        </p>
                        <p className={styles.para}>{Para}</p>
                        <NavLink to='' className={styles.btn}>{Btn}</NavLink>
                    </div>
                </div>
                <div className={styles.box1}>
                    <p className={styles.box1_heading}>
                        {Box_Heading}
                    </p>
                    <div className={styles.box1_para}>
                        <p>
                            {Box_Para}
                        </p>
                        <p>
                            {Box_Para2}
                        </p>
                    </div>
                </div>
                <PersonalBox />
                <Footer />
            </div>
        </>
    )
}

export default Box
