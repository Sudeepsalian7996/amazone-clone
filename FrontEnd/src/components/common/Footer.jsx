import React from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../../images/amazoneLogo.png";
import "../../styles/Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__sections">
        <div className="contact__section">
          <img src={amazonLogo} alt="amazon-logo" className="footer__logo" />
          <p className="contact__email">
            <a href={`mailto:amazonsup@amazon.com`}>amazonsup@amazon.in</a>
          </p>
          <div className="contact__phone">(+020) 230-123-837</div>
        </div>
        <div className="knowus__section">
          <div className="footer__titles">Get to Know Us</div>
          <p>
            <Link to="https://www.aboutamazon.in/about-us" target="_blank">
              About Us
            </Link>
          </p>
          <p>
            <Link to="https://www.aboutamazon.in/what-we-do" target="_blank">
              Careers
            </Link>
          </p>
          <p>
            <Link to="https://sustainability.aboutamazon.com/" target="_blank">
              Amazon Science
            </Link>
          </p>
        </div>
        <div className="connect__section">
          <div className="footer__titles">Connect with Us</div>
          <p>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="Visit our facebook page"
            >
              Facebook
            </Link>
          </p>
          <p>
            <Link
              to="https://instagram.com"
              target="_blank"
              aria-label="Visit our twitter page"
            >
              Instagram
            </Link>
          </p>
          <p>
            <Link
              to="https://twitter.com"
              target="_blank"
              aria-label="Visit our twitter page"
            >
              Twitter
            </Link>
          </p>
        </div>
        <div className="help__section">
          <div className="footer__titles">Let Us Help You</div>
          <p>
            <Link
              to="https://www.aboutamazon.in/impact/economy/growth"
              target="_blank"
              aria-label="Visit our twitter page"
            >
              Economy Growth
            </Link>
          </p>
          <p>
            <Link
              to="https://www.amazon.in/gp/help/customer/display.html?nodeId=508510"
              target="_blank"
              aria-label="Visit our twitter page"
            >
              Help
            </Link>
          </p>
        </div>
      </div>
      <div className="bottom__footer">
        <div className="condtions__footer">
          <p>
            <Link
              to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM"
              target="_blank"
            >
              Conditions of Use & Sale
            </Link>
          </p>
          <p>
            <Link
              to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ"
              target="_blank"
            >
              privacy policy
            </Link>
          </p>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
