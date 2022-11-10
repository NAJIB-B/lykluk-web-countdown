import Footer from "../components/Footer";
import { useState, useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import { Context } from "../Context";
import topLeftImage from "../assets/topLeftColors.png";
import topLeftPhoneImage from "../assets/topLeftImg.png";
import middleRightImage from "../assets/middleColors.png";
import middlePhoneImage from "../assets/middleImg.png";
import bottomLeftImge from "../assets/bottomColors.png";
import bottomPhoneImg from "../assets/bottomImg.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";

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
  let carouselImg;

  switch (count) {
    case 0:
      carouselImg = (
        <img
          src="./images/likes-carousel.svg"
          alt="likes"
          className="activate w-16"
        />
      );
      break;
    case 1:
      carouselImg = (
        <img
          src="./images/reels-carousel.svg"
          alt="reels"
          className="activate w-16"
        />
      );
      break;
    case 2:
      carouselImg = (
        <img
          src="./images/share-carousel.svg"
          alt="share"
          className="activate w-16"
        />
      );
      break;
    case 3:
      carouselImg = (
        <img
          src="./images/lykluk-carousel.svg"
          alt="lykluk"
          className="activate w-16"
        />
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
      <div className="container lg:flex gap-52 py-16">
        <div className="features-hero-main flex flex-col gap-8 relative py-16 ">
          <div className="carousel relative py-4">
            <h1 className="carousel-text text-7xl font-medium">
              {carouselImg}
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
      <div>
        {/* first section with image at top left */}
        <div className="w-[65%] relative small:w-[100%]">
          <div className="flex relative">
            <div className="flex-[50%] relative">
              <img src={topLeftImage} alt="" className="mt-[-20px]" />
              <img
                src={topLeftPhoneImage}
                alt=""
                className="absolute  top-[5%] left-[20%] w-[50%]"
              />
            </div>
            <div className="flex-[50%]  small:p-[1rem]">
              <div className="relative top-[30%]">
                <h2>something here</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum assumenda reiciendis qui animi obcaecati id
                  exercitationem facilis modi necessitatibus. Minima!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second section with image at right*/}
        <div className="w-[65%] relative right-[-35%] small:w-[100%] small:right-0">
          <div className="flex relative">
            <div className="flex-[50%]  small:p-[1rem]">
              <div className="relative top-[30%]">
                <h2>something here</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum assumenda reiciendis qui animi obcaecati id
                  exercitationem facilis modi necessitatibus. Minima!
                </p>
              </div>
            </div>
            <div className="flex-[50%] relative">
              <img
                src={middlePhoneImage}
                alt=""
                className="absolute  top-[-15%] left-[25%] w-[50%]"
              />
              <img
                src={middleRightImage}
                alt=""
                className="float-right w-[80%]"
              />
            </div>
          </div>
        </div>
        {/* third section with image at bottom left */}
        <div className="w-[65%] relative small:w-[100%] ">
          <div className="flex relative">
            <div className="flex-[50%] relative">
              <img src={bottomLeftImge} alt="" />
              <img
                src={bottomPhoneImg}
                alt=""
                className="absolute  top-[-20%] left-[20%] w-[50%]"
              />
            </div>
            <div className="flex-[50%] small:p-[1rem]">
              <div className="relative top-[30%]">
                <h2>something here</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum assumenda reiciendis qui animi obcaecati id
                  exercitationem facilis modi necessitatibus. Minima!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="  relative">
      <img src={frame1} alt="" className="float-left w-[20%] p-0 m-0" />
      <img src={frame2} alt="" className="float-left w-[20%] p-0 m-0" />
      <img src={frame3} alt="" className="float-left w-[20%] p-0 m-0" />
      <img src={frame4} alt="" className="float-left w-[20%] p-0 m-0" />
      <img src={frame2} alt="" className="float-left w-[20%] p-0 m-0" />
    </div>
    <Footer />
  </div>
);

export default Features;
