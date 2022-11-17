import Footer from "../components/Footer";
import Header from "../components/Header";


const Overlay = () => (
  <div className="absolute bottom-0 right-0 left-0 top-0 bg-white opacity-80 "></div>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <Overlay/>
      <Header />
      <div className="container contact-page-container relative">
        <h1 className=" font-medium contact-heading">Contact Us</h1>
        <div className="contact-us">
          <div className="contacts">
            <h3>Our Contacts</h3>
            <ul>
              <li className="address">
                <a href="">
                  <img src="./images/email.svg" alt="email icon" />
                </a>
                info@lykluk.com
              </li>
            </ul>
            <h3>Our Address</h3>
            <span className="address">
              <a href="https://goo.gl/maps/7AKSqeQsQNqnkVUS8" target="_blank">
                <img src="./images/location.svg" alt="location icon" />
              </a>
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.872135727319!2d3.5453129608664544!3d6.46223464629185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf73c539f14bf%3A0x4612f9e85fdacf83!2sVGC%20Shopping%20Mall%2C%20Victoria%20garden%20City%20106104%2C%20Lekki!5e0!3m2!1sen!2sng!4v1665135875077!5m2!1sen!2sng"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-form">
            <form action="https://formsubmit.co/info@lykluk.com" method="post">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter email"
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
                placeholder="Enter message"
              ></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
