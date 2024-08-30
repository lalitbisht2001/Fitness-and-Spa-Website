import styles from "./Spa.module.css";
import Photo1 from "/SPA/Photo1.jpg";
import Photo2 from "/SPA/Photo2.jpg";
import Photo3 from "/SPA/Photo3.jpg";

const SpaBox = () => {
    const Arr = [
        {
            name: "BODYWORK",
            para: "Direct, hands-on relief applied by Licensed Massage Therapists that blends modalities such as stretching, trigger point therapy, myofascial release, and more.",
            points: ['Bodywork', 'Bodywork(SC)', 'Master Therapist Bodywork'],
            photo: Photo1,
        },
        {
            name: "SKINCARE",
            para: "Customized, performance-forward skin therapies applied by a Licensed Esthetician that blend clinical formulas and holistic techniques.",
            points: ['Longevity Facial', 'Hydrafacial', 'Hydrafacial(SC)'],
            photo: Photo2,
        },
        {
            name: "SPECIALTY",
            para: "Technology-based, science-backed treatments to optimize your performance, beauty, and well-being.",
            points: ['Compression Therapy', 'Lightstim Red Light Therapy', 'Infrared Sauna - 1 Person'],
            photo: Photo3,
        }
    ];

    return (
        <div className={styles.main_box}>
            {Arr.map(({ name, para, points, photo }) => (
                <div key={name} className={styles.box}>
                    <div className={styles.about}>
                        <p className={styles.name}>{name}</p>
                        <p className={styles.para}>{para}</p>
                        <hr className={styles.line} />
                        <p className={styles.includes}>Includes:</p>
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.photo}>
                        <img src={photo} alt={name} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SpaBox;
