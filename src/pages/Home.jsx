import { useContext, useState, useEffect } from "react";
import Video from "../components/Video";
import { Context } from "../Context";

const Home = () => {
  const { countDown } = useContext(Context);
  const { days, hours, minutes, seconds } = countDown;

  return (
    <div className="home">
      <Video />
      <main className="main">
        <section className="countdown-timer">
          <div className="countdown-heading">
            <h1>Countdown to Launch</h1>
            <img
              src="./images/clock-icon.svg"
              alt="clock icon"
              className="clock-icon"
            />
          </div>
          <div className="timer" id="timer">
            <div>
              <div className="timer-cards">{days}</div>
              <h4>{days === 1? "Day": "Days"}</h4>
            </div>
            <div>
              <div className="timer-cards">{hours}</div>
              <h4>{hours === 1? "Hour": "Hours"}</h4>
            </div>
            <div>
              <div className="timer-cards">{minutes}</div>
              <h4>{minutes === 1? "Minute": "Minutes"}</h4>
            </div>
            <div>
              <div className="timer-cards">{seconds}</div>
              <h4>{seconds ===1? "Second": "Seconds"}</h4>
            </div>
          </div>
        </section>
        <section className="waitlist">
          <form action="" method="post">
            <input type="text" placeholder="Email" className="form-inp" />
            <input
              type="submit"
              value="Join the waitlist"
              className="form-btn"
            />
          </form>
          <small>
            Join the waitlist to receive a notification when we launch the app.
          </small>
        </section>
        <section className="social">
          <div className="social-media-icons">
            <a href="">
              <img
                src="./images/twitter-icon.svg"
                alt="twitter icon"
                className="social-icon"
              />
            </a>
            <a href="">
              <img
                src="./images/instagram-icon.svg"
                alt="instagram icon"
                className="social-icon"
              />
            </a>
            <a href="">
              <img
                src="./images/facebook-icon.svg"
                alt="facebook icon"
                className="social-icon"
              />
            </a>
            <a href="">
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
