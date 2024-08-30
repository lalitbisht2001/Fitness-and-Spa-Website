import Navbar from "../../../HEADER/Navbar";
import styles from "./Pilates.module.css";
import PilatesBox from "./PilatesBox";
import video from "/PILATES/pilates.mp4"
import Photo1 from "/PILATES/Photo1.jpg";
import Photo2 from "/PILATES/Photo2.jpg";
import Photo3 from "/PILATES/Photo3.jpg";
import Footer from "../../../FOOTER/Footer.jsx";
const Pilates = () => {
    const Arr = [
        {
            id: 1,
            name: "Small Moves. Big Changes.",
            para: "At its core , Studio Pilates tightens what`s loose and loosens what`s tight. By working evenly with subtle moves, no muscles are over or under-trained, creating balance in the body.",
            photo: Photo1,
        },
        {
            id: 2,
            name: "In-Club Experience",
            para: "We offer a completely authentic Pilates experience, created by Joseph Pilates. Each studio houses several pieces of unique equipment.",
            photo: Photo2,
        },
        {
            id: 3,
            name: "Virtual Pilates",
            para: "Keep your in-club results going with Virtual Pilates - challenging mat training at home. You`ll connect live with one of our certified instructors and be guided one-on-one through slow",
            photo: Photo3,
        }
    ];


    return (
        <>
            <Navbar />
            <div className={styles.line}></div>
            <div className={styles.main}>
                <video src={video} autoPlay loop muted className={styles.video}>{video}</video>
                <div className={styles.video_box}>
                    <p className={styles.video_heading}>STUDIO PILATES</p>
                    <button className={styles.btn}>Learn More</button>
                </div>
            </div>
            <PilatesBox Arr={Arr} />
            <Footer />
        </>
    )
}

export default Pilates
