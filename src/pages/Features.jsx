import Footer from "../components/Footer";
import { useState, useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { Context } from "../Context";

const FeaturesHero = () => {
  const carouselRef = useRef();

  // Declaring as count state for Carousel animation text
  const [count, setCount] = useState(() => 0);

  // Incrementing count
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev === 3 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Hero text Carousel animation text
  let carouselText;

  switch (count) {
    case 0:
      carouselText = <span className="activate font-medium bg-gradient bg-clip-text text-transparent">Likes</span>;
      break;
    case 1:
      carouselText = <span className="activate font-medium bg-gradient bg-clip-text text-transparent">Reels</span>;
      break;
    case 2:
      carouselText = <span className="activate font-medium bg-gradient bg-clip-text text-transparent">Share</span>;
      break;
    case 3:
      carouselText = (
        <span className="activate carousel-text font-medium">
          <span className="carousel-text-main  ">
            LYK
          </span>
          <span className="carousel-text-main text-primary">
            LUK
          </span>
        </span>
      );
  }

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
      <div className="container xl:flex gap-52 py-16">
        <div className="features-hero-main flex flex-col gap-8 relative py-16 ">
          <div className="carousel relative py-4">
            <h1 className="carousel-text text-7xl font-medium">
              {carouselText}
            </h1>
          </div>
          <div className="hero-text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, vel
              praesentium? Dolore vitae eligendi voluptatum iste eius tempora
              blanditiis ea magnam dicta quibusdam praesentium ut dignissimos,
              ratione facilis sed quia voluptates architecto perferendis esse.
              Ratione atque culpa molestiae, blanditiis eaque enim maxime ut quo
              officia quasi esse est porro molestias eum, quas eligendi
              consequuntur! Nam rem quas molestiae commodi voluptates, incidunt
              error deserunt in delectus, debitis nostrum nisi explicabo
              accusantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem obcaecati, a nemo pariatur ratione incidunt tempore
              non? Pariatur incidunt doloremque, beatae, voluptates ullam
              architecto sint cum cupiditate perspiciatis, consequuntur cumque.
            </p>
          </div>

          <section className="waitlist">
            <form
              action=""
              method="post"
              onSubmit={handleSubmit}
              className="w-full flex justify-start"
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
                className="form-btn transition-all duration-1000 ease-linear animate-pulse form-control px-7 py-2 rounded-r-md"
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
        <div className="features-hero-img flex flex-col gap-8">
          <img
            src="./images/screen_hero.svg"
            alt="lykluk screen image"
            className="max-w-xs relative"
          />
          <div className="stores flex gap-8 relative justify-center">
            <img src="./images/playstore.svg" alt="google playstore icon" />
            <img src="./images/applestore.svg" alt="apple store icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Overlay = () => (
  <div className="absolute bottom-0 right-0 left-0 top-0 bg-white opacity-90 "></div>
);

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
    <div className="features-main relative">
      <Overlay />
    </div>
    <div className="features-gallery grid lg:grid-cols-5 relative">
      <div>
        <img
          src="./images/features_1.jpg"
          alt=""
          className="object-cover h-full"
        />
      </div>
      <div>
        <img
          src="./images/features_2.jpg"
          alt=""
          className="object-cover h-full"
        />
      </div>
      <div>
        <img
          src="./images/features_3.jpg"
          alt=""
          className="object-cover h-full"
        />
      </div>
      <div>
        <img
          src="./images/features_4.jpg"
          alt=""
          className="object-cover h-full"
        />
      </div>
      <div>
        <img
          src="./images/features_5.jpg"
          alt=""
          className="object-cover h-full"
        />
      </div>
      <div className="features-gallery-header absolute inset-0 flex items-center justify-center">
        <h2 className="text-5xl text-white font-montserrat font-bold">Put your creativity in the spotlight</h2>
      </div>
    </div>
    <Footer />
  </div>
);

export default Features;
