import './About.css';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

export function About() {
  return (
    <>
      <title>About-US</title>

      <Header />

      <div className='about-us-hero-section'>
        <div className='about-us-hero-section-text'>Who We Are?</div>
      </div>

      <div className='about-us-second-section'>
        <div className='about-us-second-section-heading'>About Us</div>
        <div className='about-us-second-section-text'>At Elite Epoxy Bros, 
          we specialize in transforming ordinary concrete into stunning, 
          durable, and functional surfaces. With a passion for craftsmanship 
          and attention to detail, we deliver high-quality epoxy flooring 
          solutions designed to enhance both residential and commercial 
          spaces. From sleek metallic finishes and bold flake designs 
          to protective grind-and-seal applications, our mission is 
          to create floors that are as beautiful as they are long-lasting. 
          Every project is handled with professionalism, precision, 
          and a commitment to customer satisfaction. Whether you’re 
          looking to elevate your garage, modernize your home interior, 
          or upgrade your commercial space, we’re here to bring your 
          vision to life—one floor at a time.
        </div>

        <div className='about-us-second-section-heading'>Our Core Values</div>
        <p className='about-us-second-section-text'>1. Quality Craftsmanship, 
          We take pride in delivering flawless epoxy flooring solutions that 
          combine durability, functionality, and style. Every detail matters.  
        </p>
        <p className='about-us-second-section-text'>2. Customer Commitment, 
          Your satisfaction comes first. We listen, communicate clearly, and 
          work closely with you to ensure your vision becomes reality.
        </p>
        <p className='about-us-second-section-text'>3. Integrity & Trust, Honesty, 
          transparency, and reliability are at the heart of everything we do. We 
          stand by our work—no shortcuts, no excuses.
        </p>
        <p className='about-us-second-section-text'>4. Lasting Value, Our 
          floors aren’t just beautiful—they’re built for performance. We 
          focus on creating surfaces that add long-term value to your 
          home or business.
        </p>
      </div>
      <Footer />
    </>
  );
}