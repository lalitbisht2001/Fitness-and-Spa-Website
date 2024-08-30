import { NavLink } from "react-router-dom";
import { useState } from "react";
import useResizeWindow from "../../../HOOKS/useResizeWindow";
import styles from "./Classes.module.css";


const Classes = ({ ArrData, Photo2, SingleArr, photo }) => {
    const defaultBackground = Photo2;
    const [windowSize] = useResizeWindow();
    const [background, setBackground] = useState(defaultBackground);
    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (bg, id) => {
        setBackground(bg);
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setBackground(defaultBackground);
        setHoveredId(null);
    };



    return (
        <>
            {windowSize.width <= 550 ? (
                <div className={styles.phone_box} style={{ backgroundImage: `url(${photo})` }}>
                    <div className={styles.small_box}>
                        <p className={styles.heading}>{SingleArr[0]}</p>
                        <p className={styles.para}>
                            {SingleArr[1]}
                        </p>
                        <div className={styles.btn_box}>
                            <NavLink to={SingleArr[2]} className={styles.btn}>{SingleArr[3]}</NavLink>
                            <hr className={styles.line} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.unlimited} style={{ backgroundImage: `url(${background})` }}>
                    {ArrData.map(({ id, name, para, link, linkname, background }) => (
                        <div
                            key={id}
                            className={styles.box}
                            onMouseEnter={() => handleMouseEnter(background, id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p className={styles.heading}>{name}</p>
                            <p className={styles.para}>{para}</p>
                            {hoveredId === id && (
                                <div className={styles.btn_box}>
                                    <NavLink to={link} className={styles.btn}>{linkname}</NavLink>
                                    <hr className={styles.line} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Classes;
