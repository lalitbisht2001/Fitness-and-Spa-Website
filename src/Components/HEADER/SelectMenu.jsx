import { useState } from "react";
import { NavLink } from "react-router-dom";
// import "./SelectMenu.css";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SelectMenu({ Data, PlaceHolder }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.select_menu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.select_header}>
                <p>{PlaceHolder}</p>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {isOpen && (
                <div className={styles.select_options}>
                    {Data.map(({ id, Photo, Link, Name }) => (
                        <NavLink
                            to={Link}
                            key={id}
                            className={styles.select_option}
                        >
                            <img src={Photo} alt={Name} />
                            <div className={styles.selectlink}>
                                <p>{Name}</p><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SelectMenu;
