import { Link } from 'react-router-dom'; // Import only Link
import './Header.css';
import logo from './assets/logo.png'; 

const Header = () => {
  return (
    <div className='navigation-bar'>
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt='my website logo' className='logo'></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Header;