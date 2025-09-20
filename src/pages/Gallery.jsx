import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './gallery.css';

export function Gallery() {
  return (
    <>
      <Header />
      <div className='gallery-page-hero-container'>
        <div className="gallery-name">Gallery</div>
        <div className="gallery-slogan">Our Work Speaks for Itself</div>
        <div className="gallery-text">Welcome to our Gallery—where you can
          explore the beauty, durability, and craftsmanship of our epoxy
          flooring projects. From sleek metallic finishes to durable flake
          systems and polished grind & seal floors, each project highlights
          the custom designs and high-quality results we deliver for homes,
          businesses, and industrial spaces. Browse through our portfolio
          to see how we transform ordinary concrete into stunning,
          long-lasting surfaces tailored to every client’s vision.
        </div>
      </div>


      <div className="gallery-imgs-container">
        <img className="gallery-img" src="/Before-After.jpg"></img>
        <img className="gallery-img" src="/Before-After-2.jpg"></img>
        <img className="gallery-img" src="/Before-After-3.jpg"></img>
        <img className="gallery-img" src="/Before-After-4.jpg"></img>
        <img className="gallery-img" src="/Before-After-5.jpg"></img>
        <img className="gallery-img" src="/Before-After-6.jpg"></img>
        <img className="gallery-img" src="/Flakes-1.jpg"></img>
        <img className="gallery-img" src="/Flakes-2.jpg"></img>
        <img className="gallery-img" src="/Metallic-Gloss-1.jpg"></img>
        <img className="gallery-img" src="/Metallic-Gloss-2.jpg"></img>
        <img className="gallery-img" src="/Metallic-Gloss-3.jpg"></img>
        <img className="gallery-img" src="/Metallic-Matte-1.jpg"></img>
      </div>
      <Footer />
    </>
  );
}