import React from 'react';
import amazonLogo from '../../images/amazoneLogo.png';
import '../../styles/Footer.css';

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__sections'>
          <div className="contact__section">
              <img src={amazonLogo} alt="amazon-logo" className='footer__logo'/>
              <div className="contact__email">amazonsupport@amazon.in</div>
              <div className="contact__phone">(+020) 230-123-837</div>
          </div>
          <div className="knowus__section">
              <div className="footer__titles">Get to Know Us</div>
              <p>About Us</p>
              <p>Careers</p>
              <p>Amazon Science</p>
          </div>
          <div className="connect__section">
            <div className="footer__titles">Connect with Us</div>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>

          </div>
          <div className="help__section">
            <div className="footer__titles">Let Us Help You</div>
            <p>Your Account</p>
            <p>Help</p>
          </div>
      </div>
      <div className="bottom__footer">
        <div className="condtions__footer">
          <div>Conditions of Use & Sale</div>
          <div>privacy policy</div>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default Footer;