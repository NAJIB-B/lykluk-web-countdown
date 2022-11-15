const Footer = () => {
  return (
    <footer className="footer relative">
      <div className="container footer-container">
        <div className="footer-logo-div">
          <div className="logo">
            <img
              src="./images/lykluk_logo.svg"
              alt="lykluk logo"
              className="w-[40%]"
            />
          </div>
          <div className="footer-social-icons">
            <a href="https://twitter.com/lyklukdigital">
              <img
                src="./images/twitter-icon.svg"
                alt="twitter icon"
                className="social-icon"
              />
            </a>
            <a href="https://instagram.com/lyk.luk">
              <img
                src="./images/instagram-icon.svg"
                alt="instagram icon"
                className="social-icon"
              />
            </a>
            <a href="https://www.facebook.com/LykLuk-102466145797860">
              <img
                src="./images/facebook-icon.svg"
                alt="facebook icon"
                className="social-icon"
              />
            </a>
            <a href="#">
              <img
                src="./images/youtube-icon.svg"
                alt="youtube icon"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-list">
            <h5 className="font-medium">Company</h5>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Newsroom</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-list">
            <h5 className="font-medium">Programs</h5>
            <ul>
              <li>
                <a href="">Advertise</a>
              </li>
              <li>
                <a href="">Rewards</a>
              </li>
              <li>
                <a href="">Promotions</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-list">
            <h5 className="font-medium">Resources</h5>
            <ul>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Safety Center</a>
              </li>
              <li>
                <a href="">Accessibility</a>
              </li>
              <li>
                <a href="">Transparency</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-list">
            <h5 className="font-medium">Legal</h5>
            <ul>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Guidelines</a>
              </li>
              <li>
                <a href="">Intellectual Property Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* */
}
