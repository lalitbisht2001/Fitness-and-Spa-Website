import Classes from "./Classes"
import Photo1 from "/LINK PHOTO/classes.jpg";
import Photo2 from "/LINK PHOTO/personal.jpg";
import Photo3 from "/LINK PHOTO/pilates.jpg";
import photo from "/LINK PHOTO/phone_photo.jpg";
const Class = () => {
    const classes = [
        {
            id: 1,
            name: "Unlimited Classes",
            para: "Classes curated and developed by the industry’s best talent, bringing results through innovation.",
            link: "/classes",
            linkname: "Discover Classes",
            background: Photo1,
        },
        {
            id: 2,
            name: "Personal Training",
            para: "Performance at its highest level with renowned Personal Training.",
            link: "/personal",
            linkname: "Discover Personal Training",
            background: Photo2,
        },
        {
            id: 3,
            name: "Studio Pilates",
            para: "A purely authentic Pilates experience that strengthens and creates balance in the body.",
            link: "/pilates",
            linkname: "Discover Pilates",
            background: Photo3,
        },
    ];
    const SingleClass = ["Studio Pilates", " A purely authentic Pilates experience that strengthens and creates balance in the body.", "/pilates", "Discover Pilates"]
    return (
        <>
            <Classes ArrData={classes} Photo2={Photo2} SingleArr={SingleClass} photo={photo} />
        </>
    )
}

export default Class
