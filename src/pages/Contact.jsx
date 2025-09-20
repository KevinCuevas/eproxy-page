import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import './contact.css';

export function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page-container">
        <div className="contact-page-hero">
          <div className="contact-page-hero-text">Contact Us</div>
        </div>
        <div className="contact-info-container">
          <div className='contact-info-header'>Contact Info</div>
          <div className='contact-info-box'>
            <div className='sec-1'>
              <div>Call us</div>
              <div>951-597-0614</div>
            </div>
            <div className='sec-2'>
              <div>E-mail Us</div>
              <div className='contact-info-email'>eliteepoxybros@gmail.com</div>
              <div>DM or Follow Us</div>
              <img className='contact-info-instagram-icon' src='/instagram-icon.svg'></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}