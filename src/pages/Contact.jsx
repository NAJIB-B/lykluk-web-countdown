import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="overlay"></div>
      <div className="container contact-page-container">
        <h1>Contact Us</h1>
        <div className="contact-us">
          <div className="contacts">
            <h3>Our Contacts</h3>
            <ul>
              <li className="address">
                <a href="">
                  <img src="./images/phone.svg" alt="phone icon" />
                </a>
                +23490-0090-0090
              </li>
              <li className="address">
                <a href="">
                  <img src="./images/email.svg" alt="email icon" />
                </a>
                info@lykluk.com
              </li>
            </ul>
            <h3>Our Address</h3>
            <span className="address">
              <a href="">
                <img src="./images/location.svg" alt="location icon" />
              </a>
              Suite F11, VGC Shopping Mall, Road 2, Victoria Garden City, Lagos.
            </span>
          </div>
          <div className="contact-form">
            <form action="https://formsubmit.co/info@lykluk.com" method="post">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required placeholder="Enter email"/>
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
