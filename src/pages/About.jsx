import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const About = () => {
  const [aboutImgs, setAboutImgs] = useState(() => []);

  // Getting photos for the photo grid
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos/?&query=happy&orientation=portrait&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU"
    )
      .then((res) => res.json())
      .then((data) => setAboutImgs((prev) => data.results));
  }, []);

  // Mapping over the photos
  const imagesGrid = aboutImgs.slice(0,8).map((img, index) => (<div key={index} className= {`hex${index}`}><img className="clip" src={img.urls.small} alt="" /></div>));

  return (
    <div className="about-page">
      <div className="overlay"></div>
      <div className="container about-container">
        <div className="about">
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              aliquam repudiandae quos ab amet eveniet. Quae, deserunt ipsam,
              labore aperiam hic ratione nulla enim minus amet obcaecati eum
              iusto aliquid maxime, atque rerum laborum itaque repellendus
              voluptatibus maiores architecto corporis dolores? Veritatis
              consectetur ex tempora ducimus, asperiores placeat impedit dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores at modi, odit quis voluptate aliquam sint perspiciatis
              ex corrupti earum, eveniet temporibus pariatur quasi quod tenetur
              aliquid accusamus impedit? Voluptates repellat odit expedita
              reprehenderit quam. Dolorem non perspiciatis fugit, tempore,
              asperiores ex quisquam quae temporibus aliquam incidunt neque ea
              enim sit placeat ipsa, rem ducimus dolores possimus quidem aut
              culpa!
            </p>
          </div>
          <div className="about-imgs">{imagesGrid}</div>
        </div>
      </div>
      <div className="about-downloads">
        <h3>Coming Soon</h3>
        <div className="about-stores">
          <div className="download-store">
            <img src="./images/playstore.svg" alt="playstore banner" />
          </div>
          <div className="download-store">
            <img src="./images/applestore.svg" alt="app banner" />
          </div>
          <div className="download-store">
            <img src="./images/microsoftstore.svg" alt="app banner" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;


// const firstDivImgs = aboutImgs.slice(0, 3).map((img, index) => (
//   <div key={index} className={`img${index}`}>
//     <img src={img.urls.small} alt="" />
//   </div>
// ));

// const secondDivImgs = aboutImgs.slice(3, 6).map((img, index) => (
//   <div key={index} className={`img${index}`}>
//     <img src={img.urls.small} alt="" />
//   </div>
// ));

// const thirdDivImgs = aboutImgs.slice(6, 9).map((img, index) => (
//   <div key={index} className={`img${index}`}>
//     <img src={img.urls.small} alt="" />
//   </div>
// ));