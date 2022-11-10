import { useContext, useState, useEffect } from "react";
import Video from "../components/Video";
import { Context } from "../Context";
import {useLocation} from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  


  return (
    <div className="home-page">
      <Header />
      <Video />
      <main className="main">
        <section className="countdown-timer">
          <div className="countdown-heading">
            <h1 className="text-5xl font-bold">
              Put your creativity in the spotlight
            </h1>
          </div>
        </section>
        <section className="social">
          <div className="social-media-icons">
            <a href="https://twitter.com/lyklukdigital" target="_blank">
              <img
                src="./images/twitter-icon.svg"
                alt="twitter icon"
                className="social-icon"
              />
            </a>
            <a href="https://instagram.com/lyk.luk" target="_blank">
              <img
                src="./images/instagram-icon.svg"
                alt="instagram icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/LykLuk-102466145797860"
              target="_blank"
            >
              <img
                src="./images/facebook-icon.svg"
                alt="facebook icon"
                className="social-icon"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="./images/youtube-icon.svg"
                alt="youtube icon"
                className="social-icon"
              />
            </a>
          </div>
          <div className="downloads">
            <div className="download-store">
              <img src="./images/playstore.svg" alt="playstore banner" />
            </div>
            <div className="download-store">
              <img src="./images/applestore.svg" alt="app banner" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
