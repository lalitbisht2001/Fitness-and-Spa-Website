import Box from "./Box";
import TrainingVideo from "/VIDEO/TrainingVideo.mp4";
const Personal = () => {

  const Heading = "PERSONAL TRAINING AT EQUINOX";
  const Para = "Raising the power of performance.";
  const BoxHeading = "RAISING THE POWER OF PERFORMANCE";
  const Box_Para = "One-on-One training at Equinox is backed by our Health Advisory Board , and theEQS OS. This proprietary operating system , built to advance full health optimization , decoders and unlocks the peak of your potential, redefining High - Performance Living on a whole new scale.";
  const Box_Para2 = "This is more than training , it`s the first-of-its-kind , data-driven and expert led path to unlocking your absolute best and achieving extraordinary results.";
  return (
    <>
      <Box Heading={Heading} Para={Para}
        Box_Heading={BoxHeading}
        Box_Para={Box_Para}
        Box_Para2={Box_Para2}
        Btn="Sign Up"
        TrainingVideo={TrainingVideo}
      />
    </>
  )
}

export default Personal
