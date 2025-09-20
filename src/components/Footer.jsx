import './footer.css';

export function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-cards'>
          <img className='footer-logo' src='/logo.webp' ></img>
        </div>
        <div className='footer-cards'>
          <div className='footer-heading'>Contact</div>
          <div className='footer-contact-col'>951-597-0614</div>
          <div className='footer-contact-col'>eliteepoxybros@gmail.com</div>
        </div>
        <div className='footer-cards'>
          <div className='footer-heading'>Services</div>
          <div className='footer-service-col'>Concrete Grind & Seal</div>
          <div className='footer-service-col'>Metallic Gloss</div>
          <div className='footer-service-col'>Metallic Matte</div>
          <div className='footer-service-col'>Flake Epoxy</div>
        </div>
      </div>

    </div>
  );
}