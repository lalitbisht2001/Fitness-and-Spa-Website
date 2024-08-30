import Classes from "./Classes"
import Photo1 from "/MEDITATION/Spa.jpg";
import Photo2 from "/MEDITATION/Recovery.jpg";
import Photo3 from "/MEDITATION/Meditation.jpg";
import photo from "/MEDITATION/Phone_photo.jpg";

const Meditation = () => {
    const meditation = [
        {
            id: 1,
            name: "The Spa",
            para: "Take time to regenerate and elevate your performance with our always evolving selection of Spa treatments and services.",
            link: "/classes",
            linkname: "Discover The Spa",
            background: Photo1,
        },
        {
            id: 2,
            name: "Stretch & Recovery",
            para: "Regenerate and recover with stretching, massage, and breathing techniques.",
            link: "/personal",
            linkname: "Discover Recovery",
            background: Photo2,
        },
        {
            id: 3,
            name: "HeadStrong Meditation",
            para: "Find your center anywhere with our selection of meditations created for mindfulness,calming,and sleep.",
            link: "/pilates",
            linkname: "Discover HeadStrong",
            background: Photo3,
        },
    ];
    const Arr = ["HeadStrong Meditation", "Find your center anywhere with our selection of meditations created for mindfulness,calming,and sleep.", "/classes", "Discover HeadStrong"]
    return (
        <>
            <Classes ArrData={meditation} Photo2={Photo2} SingleArr={Arr} photo={photo} />
        </>
    )
}

export default Meditation
