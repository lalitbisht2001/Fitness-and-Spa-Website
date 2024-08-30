// import { useState } from "react";
import useResizeWindow from "../../HOOKS/useResizeWindow";
import Buttons from "./Buttons";
import FirstLink from "./FirstLink";
import styles from "./Navbar.module.css";
import SecondLink from "./SecondLink";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useIsOpen from "../../HOOKS/useIsOpen";

const Navbar = () => {
    const [windowSize] = useResizeWindow();
    return (
        <>
            {windowSize.width <= 1190 ? <Phone /> : <Computer />}
        </>
    );
};

export default Navbar;

function Computer() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <span>E</span>
                <span>Q</span>
                <span>U</span>
                <span>I</span>
                <span>N</span>
                <span>O</span>
                <span>X</span>
            </div>
            <FirstLink />
            <div className={styles.line}></div>
            <SecondLink />
            <div className={styles.line}></div>
            <Buttons />
        </div>
    );
}

function Phone() {
    const [isOpen, setIsOpen] = useIsOpen();
    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <div className={`${styles.navbar} ${styles.anotherClass}`} >
                <div className={styles.logo}>
                    <span>E</span>
                    <span>Q</span>
                    <span>U</span>
                    <span>I</span>
                    <span>N</span>
                    <span>O</span>
                    <span>X</span>
                </div>
                <div onClick={toggleOpen} className={styles.window_style}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
            </div>
            <div className={styles.nav_box} style={{ position: isOpen ? "fixed" : "" }} >
                {isOpen && (
                    <div className={styles.side_slide} >
                        <NavLink to='/clubs' className={styles.phone_btn1}>Visit a Club</NavLink>
                        <NavLink to='/join-online' className={styles.phone_btn2}>Join Online</NavLink>
                        <NavLink to='/alumni' className={styles.phone_btn3}>Alumni</NavLink>
                        <NavLink to='/sign-in' className={styles.phone_btn3}>Sign in</NavLink>
                        <div className={styles.vertical_line}></div>
                        <NavLink to='/' className={styles.navlink}>Home</NavLink>
                        <NavLink to='/clubs' className={styles.navlink}>Clubs</NavLink>
                        <NavLink to='/groupfitness' className={styles.navlink}>Group Fitness</NavLink>
                        <NavLink to='/digitalclasses' className={styles.navlink}>Digital Classes</NavLink>
                        <NavLink to='/personal' className={styles.navlink}>Personal Training</NavLink>
                        <NavLink to='/pilates' className={styles.navlink}>Pilates</NavLink>
                        <div className={styles.vertical_line}></div>
                        <NavLink to='/spa' className={styles.navlink}>Spa</NavLink>
                        <NavLink to='/hotels' className={styles.navlink}>Hotels</NavLink>
                        <NavLink to='/' className={styles.navlink}>The Shop at Equinox</NavLink>
                        <NavLink to='/' className={styles.navlink}>Soul Cycle At-Home Bike</NavLink>
                    </div>
                )}
            </div>
        </>
    );
}
