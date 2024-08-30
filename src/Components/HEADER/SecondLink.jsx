import { NavLink } from 'react-router-dom'
import SelectMenu from './SelectMenu'
import Shop1 from "/PHOTO/GymEqi.jpg";
import Shop2 from "/PHOTO/GymCycle.jpg";
import styles from "./Navbar.module.css";

const SecondLink = () => {
    const Shop = [
        {
            id: 12,
            Photo: Shop1,
            Name: "The Shop at Equinox",
            Link: "/groupfitness",
        },
        {
            id: 13,
            Photo: Shop2,
            Name: "SoulCycle At-Home Bike",
            Link: "/digital",
        }
    ];
    return (
        <div className={styles.main}>
            <NavLink to='/spa' className={styles.navlink}>Spa</NavLink>
            <NavLink className={styles.navlink}>Hotels</NavLink>
            <SelectMenu Data={Shop} PlaceHolder="Shop" />
        </div>
    )
}

export default SecondLink
