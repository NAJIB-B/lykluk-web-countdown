import { useContext, useState, useEffect } from "react";
import Video from "../components/Video";
import { Context } from "../Context";
import {useLocation} from "react-router-dom";

const Home = () => {

  // Receiving countdown state from  context
  const { countDown } = useContext(Context);
  
  // Destructuring countdown state from context
  const { days, hours, minutes, seconds } = countDown;

  // Creating formData state
  const [formData, setFormData] = useState(() => ({
    email: "",
  }));

  // Function to update formData when email is inputted
  const handleEmail = (e) => {
    const { type, value, name } = e.target;
    setFormData((prev) => ({ [name]: value }));
  };

  // Function to handle submit of formData
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Email: formData.email,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    fetch(
      `https://sheet.best/api/sheets/d908cf8a-47a5-4249-9031-d6db0c0893c8`,
      options
    )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert("Thank you for waitlisting 😀🙏🏾")
      setFormData(prev => ({email: ""}))
    })
  }


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
              <h4>{days === 1 ? "Day" : "Days"}</h4>
            </div>
            <div>
              <div className="timer-cards">{hours}</div>
              <h4>{hours === 1 ? "Hour" : "Hours"}</h4>
            </div>
            <div>
              <div className="timer-cards">{minutes}</div>
              <h4>{minutes === 1 ? "Minute" : "Minutes"}</h4>
            </div>
            <div>
              <div className="timer-cards">{seconds}</div>
              <h4>{seconds === 1 ? "Second" : "Seconds"}</h4>
            </div>
          </div>
        </section>
        <section className="waitlist">
          <form action="" method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              className="form-inp"
              name="email"
              value={formData.email}
              onChange={handleEmail}
              required
            />
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
            <a href="" target="_blank">
              <img
                src="./images/twitter-icon.svg"
                alt="twitter icon"
                className="social-icon"
              />
            </a>
            <a href="https://www.instagram.com/lyk.luk/" target="_blank">
              <img
                src="./images/instagram-icon.svg"
                alt="instagram icon"
                className="social-icon"
              />
            </a>
            <a href="https://www.facebook.com/LykLuk-102466145797860" target="_blank">
              <img
                src="./images/facebook-icon.svg"
                alt="facebook icon"
                className="social-icon"
              />
            </a>
            <a href="" target="_blank">
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
