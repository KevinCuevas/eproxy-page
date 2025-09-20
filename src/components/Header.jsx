import { Link } from 'react-router';
import './header.css';

export function Header() {
  return (
    <div className='header'>
      <div className='left-section'>
        <Link to='/' className='header-link'>
          <img className='logo' src='../../public/logo.webp' ></img>
        </Link>
      </div>

      <div className='right-section'>
        <Link className='home-link nav-link' to='/'>1Home</Link>
        <Link className='about-link nav-link' to='/about' >About</Link>
        <Link className='gallery-link nav-link' to='/gallery'>Gallery</Link>
        <Link className='service-link nav-link' to='/service'>Service</Link>
        <Link className='contact-link nav-link' to='/contact'>Contact</Link>
        <Link className='quote-link nav-link' to='/quote'>Get Quote</Link>
      </div>

    </div>
  );
}
