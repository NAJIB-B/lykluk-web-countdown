import { useContext, useState, useEffect } from "react";

const Video = () => {
  const [count, setCount] = useState(() => 0); 

  useEffect(() => {
    const timeOut = setInterval(() => {
      setCount((prev) => {
        if (prev === 5) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 8000);
    return () => clearInterval(timeOut);
  }, []);

  return (
    <div className="video">
      {count === 0 && (
        <video
          src="./images/vid1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        ></video>
      )}
      {count === 1 && (
        <video
          src="./images/vid2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        ></video>
      )}
      {count === 2 && (
        <video
          src="./images/vid3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        ></video>
      )}
      {count === 3 && (
        <video
          src="./images/vid4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        ></video>
      )}
      {count === 4 && (
        <video
          src="./images/vid5.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        ></video>
      )}
      {count === 5 && (
        <video
          src="./images/vid6.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        ></video>
      )}
    </div>
  );
};

export default Video;

//  let video;
//   if (count === 0) {
//     video = (
//       <video autoPlay loop muted playsInline className="video-bg">
//         <source src={vidArr[count]} />
//       </video>
//     );
//   } else if (count === 1) {
//     video = (
//       <video autoPlay loop muted playsInline className="video-bg">
//         <source src={vidArr[count]} />
//       </video>
//     );
//   } else if (count === 2) {
//     video = (
//       <video autoPlay loop muted playsInline className="video-bg">
//         <source src={vidArr[count]} />
//       </video>
//     );
//   } else if (count === 3) {
//     video = (
//       <video autoPlay loop muted playsInline className="video-bg">
//         <source src={vidArr[count]} />
//       </video>
//     );
//   } else if (count === 4) {
//     video = (
//       <video autoPlay loop muted playsInline className="video-bg">
//         <source src={vidArr[count]} />
//       </video>
//     );
//   } else if (count === 5) {
//     video = (
//       <video autoPlay loop muted playsInline className="video-bg">
//         <source src={vidArr[count]} />
//       </video>
//     );
//   }
