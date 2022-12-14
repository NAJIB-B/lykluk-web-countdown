import Footer from "../components/Footer";
import { useState, useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { Context } from "../Context";
import { useInView } from "react-intersection-observer";

const FeaturesHero = () => {

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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Thank you for waitlisting 😀🙏🏾");
        setFormData((prev) => ({ email: "" }));
      });
  };

  return (
    <section className="features-hero relative">
      <Overlay />
      <Header />
      <div className="container hero-container flex small:flex-col gap-52  py-16 items-center">
        <div className="features-hero-main flex flex-col gap-8 relative py-16 ">
          <div className="carousel relative py-4 imagesAnimationDiv">
            <h1 className="carousel-text text-8xl font-medium mb-0">
              <span className="font-medium text-transparent likes">Lyks</span>

              <span className="font-medium text-transparent reels">Luks</span>

              <span className="font-medium text-transparent share">Share</span>
              {/* <img
                src={"./images/lykluk.svg"}
                alt=""
                className="lykluk -left-3 "
              /> */}
              <span className=" font-medium lykluk">
                <span>LYK</span>
                <span className="text-primary">LUK</span>
              </span>
            </h1>
          </div>
          <div className="hero-text ">
            <h2
              className="font-semibold text-2xl"
              style={{ fontFamily: "mahameru-medium" }}
            >
              It’s your time to shine!
            </h2>
            <p>
             For the budding creatives and dreamers! Are you a part of the
masses of talents who aren't getting noticed? Do you sometimes
feel like you're not really getting your desired media content on
your feed?
            </p>
            <br />
            <p>
              {" "}
             Imagine a platform that prioritizes new talents and perspectives,
where your creativity is celebrated and escalated!
            </p>
           
           
           
             
          </div>

          <section className="waitlist">
            <form
              action=""
              method="post"
              onSubmit={handleSubmit}
              className="w-full flex "
            >
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleEmail}
                required
                className="form-inp form-control px-7 py-2 rounded-l-md"
              />
              <input
                type="submit"
                value="Join the waitlist"
                className="form-btn transition-all duration-500 ease-linear outline-none bg-primary relative form-control px-7 py-2 rounded-r-md w-full"
              />
            </form>
            <small>
              Join the waitlist to receive a notification when we launch the
              app.
            </small>
          </section>

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
        </div>
        <div className="features-hero-img flex flex-col gap-8 items-center">
          <img
            src="./images/screen_hero.svg"
            alt="lykluk screen image"
            className="max-w-xs  hero-img"
          />
          <div className="stores flex gap-8 relative justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.lykluk.lykluk&gl=US&pli=1"
              target={"_blank"}
            >
              <img
                src="./images/playstore.svg"
                alt="google playstore icon"
                className="hover:scale-110 duration-300 ease-linear"
              />
            </a>
            <a href="#">
              <img
                src="./images/applestore.svg"
                alt="apple store icon"
                className="hover:scale-110 duration-300 ease-linear"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Overlay = () => (
  <div className="absolute bottom-0 right-0 left-0 top-0 bg-white opacity-90 "></div>
);

const FeaturesMain = () => {
  const { ref: firstRef, inView: firstRefVisibility } = useInView({
    root: null,
    rootMargin: "50px",
    threshold: 0.15,
  });

  const { ref: secondRef, inView: secondRefVisibility } = useInView({
    root: null,
    rootMargin: "50px",
    threshold: 0.15,
  });

  const { ref: thirdRef, inView: thirdRefVisibility } = useInView({
    root: null,
    rootMargin: "50px",
    threshold: 0.15,
  });

  return (
    <section className="features-main relative">
      <Overlay />
      <img
        src="./images/dotted_arrow.svg"
        alt="line"
        className="line absolute left-[50%] w-[35%]"
      />
      <div className="feature relative">
        <img
          src="./images/frame1.svg"
          alt="mobile screen"
          className={firstRefVisibility ? "screen1 screen" : "frames"}
          ref={firstRef}
        />
        <img
          src="./images/one.svg"
          alt="mobile app screen features"
          className="feature-screen z-40 relative"
        />
        <div className="feature-text">
          <div className="flex flex-row-reverse justify-center items-center gap-4">
            <img
              src="./images/messaging.svg"
              alt="messaging icon"
              className="w-[10%]"
            />
            <h3 className="font-bold">Send Messages</h3>
          </div>

          <p>
            Stay in touch with friends and family with an easy-to-use interface,
            secure system and captivating features. Communicating couldn't be
            easier.
          </p>
        </div>
      </div>
      <div className="feature justify-end relative">
        <img
          src="./images/frame2.svg"
          alt="mobile screen"
          className={secondRefVisibility ? "screen2 screen" : "frames"}
          ref={secondRef}
        />
        <img
          src="./images/mid.svg"
          alt="mobile app screen features"
          className="feature-screen z-40 order-2 relative one"
        />
        <div className="feature-text two">
          <div className="flex flex-row-reverse justify-center items-center gap-4">
            <img
              src="./images/sharing.svg"
              alt="share icon"
              className="w-[10%]"
            />
            <h3 className="font-bold">Share Videos</h3>
          </div>

          <p>
            Share entertaining and exciting videos from a creative community
            with mutuals in any location. And your friends aren't left out
            either.
          </p>
        </div>
      </div>
      <div className="feature relative three animate-third">
        <img
          src="./images/frame3.svg"
          alt="mobile screen"
          className={thirdRefVisibility ? "screen3 screen" : "frames"}
          ref={thirdRef}
        />
        <img
          src="./images/three.svg"
          alt="mobile app screen features"
          className="feature-screen z-40 relative feature-screen-3"
        />
        <div className="feature-text">
          <div className="flex flex-row-reverse justify-center items-center gap-4">
            <img
              src="./images/add.svg"
              alt="add friends icon"
              className="w-[10%]"
            />
            <h3 className="font-bold">Make New Friends</h3>
          </div>
          <p>
            Connect with fellow creatives and content lovers across the globe in
            a creative and inclusive space. Our user friendly algorithm makes
            for a wider reach amongst users.
          </p>
        </div>
      </div>
    </section>
  );
};

const Features = () => (
  /* const [aboutImgs, setAboutImgs] = useState(() => []);*/ /* // Getting photos for the photo grid*/ /* useEffect(() => {*/ /*   fetch(*/ /*     "https://api.unsplash.com/search/photos/?&query=happy&orientation=portrait&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU"*/ /*   )*/ /*     .then((res) => res.json())*/ /*     .then((data) => setAboutImgs((prev) => data.results));*/ /* }, []);*/ /* // Mapping over the photos*/ /* const imagesGrid = aboutImgs.slice(0,8).map((img, index) => (<div key={index} className= {`hex${index}`}><img className="clip" src={img.urls.small} alt="" /></div>));*/ <div className="features-page">
    <FeaturesHero />
    <section className="features-icons py-4 flex">
      <div className="features-icons-div my-0 mx-auto flex gap-10">
        <div className="features-icon">
          <img
            src="/images/heart-icon-light.svg"
            alt="heart icon"
            className="w-full"
          />
        </div>
        <div className="features-icon">
          <img
            src="/images/dislike-icon-light.svg"
            alt="dislike icon"
            className="w-full"
          />
        </div>
        <div className="features-icon">
          <img src="/images/chat-icon.svg" alt="chat icon" className="w-full" />
        </div>
        <div className="features-icon">
          <img
            src="/images/share-icon.svg"
            alt="share icon"
            className="w-full"
          />
        </div>
      </div>
    </section>
    <FeaturesMain />
    <div className="features-gallery relative">
      <img
        src="./images/lykluk-lite.svg"
        alt="lykluk logo"
        className="absolute top-4 left-4  z-[100] w-[3.5rem]"
      />
      <div>
        <img
          src="./images/features_1.jpg"
          alt=""
          className="object-cover h-full gallery-img"
        />
      </div>
      <div>
        <img
          src="./images/features_2.jpg"
          alt=""
          className="object-cover h-full gallery-img"
        />
      </div>
      <div>
        <img
          src="./images/features_3.jpg"
          alt=""
          className="object-cover h-full gallery-img"
        />
      </div>
      <div>
        <img
          src="./images/features_4.jpg"
          alt=""
          className="object-cover h-full gallery-img"
        />
      </div>
      <div>
        <img
          src="./images/features_5.jpg"
          alt=""
          className="object-cover h-full gallery-img"
        />
      </div>
      <div className="features-gallery-header absolute inset-0 flex items-center justify-center text-center">
        <h2 className="text-5xl text-white font-montserrat font-bold z-50 text-shadow">
          Put your creativity in the spotlight
        </h2>
      </div>
    </div>
    <Footer />
  </div>
);

export default Features;
