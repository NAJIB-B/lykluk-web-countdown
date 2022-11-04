import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Features = () => {
  // const [aboutImgs, setAboutImgs] = useState(() => []);

  // // Getting photos for the photo grid
  // useEffect(() => {
  //   fetch(
  //     "https://api.unsplash.com/search/photos/?&query=happy&orientation=portrait&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setAboutImgs((prev) => data.results));
  // }, []);

  // // Mapping over the photos
  // const imagesGrid = aboutImgs.slice(0,8).map((img, index) => (<div key={index} className= {`hex${index}`}><img className="clip" src={img.urls.small} alt="" /></div>));

  return (
    <div className="features-page">
      <div className="container features-container">
        
      </div>
      <Footer />
    </div>
  );
};

export default Features;