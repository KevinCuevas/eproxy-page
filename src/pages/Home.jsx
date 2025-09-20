import { Link } from 'react-router';
import './Home.css';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

export function Home() {

  return (
    <>
      <Header />

      <div className='hero-section'>
        <div className='hero-text-container'>
          <span className='hero-heading-text'>Elite Luxury Flooring</span>
          <span className='hero-slogan-text'>Transforming Floors With A Touch Of Class</span>
          <Link className='quote' to='/quote'>
            <button className='hero-quote-button'>Get Your Qute Now</button>
          </Link>
        </div>

        <div className='img-container'>
          <img className='hero-img-demenstration' src='/eproxy-page/public/Flakes-1.jpg'></img>
          <img className='hero-img-demenstration' src='/Metallic-Gloss-1.jpg'></img>
        </div>
        

      </div>

      <div className='services-section'>
        <div className='section-heading'>Our Services</div>
        <div className='service-list'>
          <div className='service-cards'>
            <span className='service-title'>Concrete Grind & Seal</span>
            <span className='service-text'>Concrete Grind & Seal delivers a sleek, durable, and low-maintenance 
              finish at an affordable price. We grind away imperfections and apply a 
              protective sealer, giving your floors a modern look that’s built to 
              last—perfect for homes, showrooms, offices, and warehouses.
            </span>
          </div>
          <div className='service-cards'>
            <span className='service-title'>Metallic Gloss</span>
            <span className='service-text'>Metallic Gloss Epoxy Flooring turns any space into a showpiece. With a 
              sleek, mirror-like finish and stunning custom effects, it’s as durable as it is eye-catching—perfect 
              for homes, showrooms, and businesses that want to stand out.
            </span>
          </div>
          <div className='service-cards'>
            <span className='service-title'>Metallic Matte</span>
            <span className='service-text'>Metallic Matte Epoxy Flooring combines modern elegance with lasting 
              durability. With its smooth, low-sheen finish and unique metallic depth, it’s the perfect choice for 
              homes, offices, and showrooms that want a sleek, contemporary edge without the shine.
            </span>
          </div>
          <div className='service-cards'>
            <span className='service-title'>Flake Epoxy</span>
            <span className='service-text'>Flake Epoxy Flooring combines durability with style. With endless color 
              options, a slip-resistant finish, and tough protection against stains and heavy traffic, it’s the 
              perfect choice for garages, showrooms, and commercial spaces.
            </span>
          </div>
        </div>
      </div>
      <div className='about-us-section'>
        <div className='section-heading'>About US</div>
        <span className='about-us-text'>We specialize in high-quality epoxy flooring solutions that combine strength, style, and long-lasting 
          performance. From sleek metallic finishes to durable flake and grind & seal systems, our expert team delivers 
          custom floors designed to transform any space—residential, commercial, or industrial.
        </span>
        <Link className='about-us' to='/about'>
          <button className='about-us-button'>Learn More</button>
        </Link>
      </div>

      <div className='faq-section'>
        <div className='section-heading'>
          Frequently Asked Questions
        </div>
        <div className='faq-item'>
          <button className='faq-question'>
            How Long Does It Take You To Apply Garage Epoxy Flake Coatings? 
          </button>
          <div className='faq-answer'>
            <p>
              Our efficient process allows us to complete most projects in 5-10 hours, depending on size. We aim to finish within 
              2-3 days.
            </p>
          </div>
        </div>

        <div className='faq-item'>
          <button className='faq-question'>
            Can Floor Coatings Be Used Outside?
          </button>
          <div className='faq-answer'>
            <p>
              Our UV-stable coatings are perfect for enhancing your outdoor spaces, including driveways, patios, and pool areas. 
              They resist discoloration and flaking, ensuring long-lasting beauty.
            </p>
          </div>
        </div>

        <div className='faq-item'>
          <button className='faq-question'>
            How Long After You Finish Can I Walk On It?
          </button>
          <div className='faq-answer'>
            <p>
              You can walk on the finished floor in as little as 12 hours after we finish! We recommend waiting at least 24 hours 
              before moving heavy objects onto the floor.
            </p>
          </div>
        </div>

        <div className='faq-item'>
          <button className='faq-question'>
            How Long Do These Floors Last?
          </button>
          <div className='faq-answer'>
            <p>
              These floors last well over 10 years! We recommend getting your floor serviced every 5 years to maintain its appearance.
            </p>
          </div>
        </div>

      </div>

      <div className='social-media-section'>
        <div className='social-media-text'>Follow US On Instagram</div>
        <img className='social-media-icon' src='/instagram-icon.svg'></img>
      </div>
      <Footer />
    </>
  );
}


