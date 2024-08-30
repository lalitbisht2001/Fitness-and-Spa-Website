import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Club.module.css";
import Navbar from '../../HEADER/Navbar';
import Photo1 from "/PAGES/Boston.jpg";
import Photo4 from "/PAGES/London.jpg";
import Photo2 from "/PAGES/Canada.jpg";
import Photo3 from "/PAGES/Chicago.jpg";
import useResizeWindow from '../../../HOOKS/useResizeWindow';
import { useState } from 'react';

const Club = () => {
    const [query, setQuery] = useState("");
    const [windowSize] = useResizeWindow();

    const Arr = [
        {
            name: "Boston",
            para: "From the heart of downtown to fashionable Back Bay, our Boston clubs are designed to inspire. Each location delivers the essential elements of well-being, including innovative classes, exceptional trainers, and now the Precision Running Lab, our breakthrough standalone running studio, only at Equinox Chestnut Hill.",
            photo: Photo1,
        },
        {
            name: "Canada",
            para: "Step into the lap of luxury at one of our iconic SoCal fitness locations, each designed to transform, revive and rejuvenate. Spend an afternoon soaking on the sun deck at West Hollywood, or refuel with healthy cuisine at one of our exclusive Equinox Sports Club restaurants. From the O.C. to the Valley, each of these Southern California fitness clubs is inspired by the breathtaking landscapes and distinctive architecture of L.A. and its surroundings. Check out our Southern California fitness locations below.",
            photo: Photo2,
        },
        {
            name: "Chicago",
            para: "Spacious and serene, each Chicago fitness club defines luxury and well-being while absorbing the cultural feel of its surrounding neighborhood. From expert personal trainers and innovative group fitness classes to soothing spa treatments and carefully curated boutiques, the urban and suburban wellness experiences at our luxury gyms in Chicago are powered by a holistic approach to living.",
            photo: Photo3,
        },
        {
            name: "London",
            para: "Discover two unparalleled London fitness destinations in one of the world’s most inspiring cities. Our flagship Equinox Fitness Club in the UK, Equinox Kensington is housed in the historic Derry and Toms building, and awes with a dramatic floor plan that sweeps around its centre elliptical dome. Designed to the most discerning standards of its neighbourhood, E St James’s offers simply the most elevated and personalised Equinox experience - a new chapter in the evolution of E by Equinox.",
            photo: Photo4,
        },
    ];

    const filteredArr = query
        ? Arr.filter(values => values.name.toLowerCase().includes(query.toLowerCase()))
        : Arr;

    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.box1}>
                    <p className={styles.heading}>
                        108 CLUBS WORLDWIDE : FIND A CLUB NEAR YOU
                    </p>
                    <div className={styles.search_div}>
                        <div className={styles.icon_div}>
                            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                        </div>
                        <input
                            type="text"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search For A Location"
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.box2}>
                    {
                        filteredArr.map((values, id) => (
                            <div key={id} className={styles.box}>
                                <div className={styles.about}>
                                    <p className={styles.name}>{values.name}</p>
                                    <p className={styles.para}>{values.para}</p>
                                </div>
                                {
                                    windowSize.width > 830 && (
                                        <div className={styles.photo}>
                                            <img src={values.photo} alt={values.name} className={styles.img} />
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Club;
