import Classe1 from "/PHOTO/GroupPhoto.jpg";
import Classe2 from "/PHOTO/DigitalClass.jpg";
import Training1 from "/PHOTO/PersonalTraining.jpg";
import Training2 from "/PHOTO/Pilates.jpg";
import SelectMenu from "./SelectMenu";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function FirstLink() {
    const Training = [
        {
            id: 10,
            Photo: Training1,
            Name: "Personal Training",
            Link: "/personal",
        },
        {
            id: 11,
            Photo: Training2,
            Name: "Pilates",
            Link: "/pilates",
        }
    ];

    const Classes = [
        {
            id: 12,
            Photo: Classe1,
            Name: "Group Fitness",
            Link: "/groupfitness",
        },
        {
            id: 13,
            Photo: Classe2,
            Name: "Digital Classes",
            Link: "/digital",
        }
    ];

    return (
        <div className={styles.main}>
            <NavLink to='/' className={styles.navlink}>Home</NavLink>
            <NavLink to='/clubs' className={styles.navlink}>Clubs</NavLink>
            <SelectMenu Data={Training} PlaceHolder="Training" />
            <SelectMenu Data={Classes} PlaceHolder="Classes" />
        </div>
    );
}

export default FirstLink;
