import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import './Header.css';
import '../App.css';

const Header = () => {
    const navRef = useRef();

    const logo = 'https://w0.peakpx.com/wallpaper/734/724/HD-wallpaper-brasil-logo-argentina-barcelona-brazil-cbf-cbf-logo-real-madrid-shadow-thumbnail.jpg'

    const showNavBar = () => {
        navRef.current.classList.toggle("show-options");
    }

    return (  
        <nav className='navbar'>
            <div className="logo">
                <Link to='/'>
                    <img className='logo-img-header' src={logo} alt='logo'></img>
                </Link>
            </div>
            <button className='toggle-button' onClick={showNavBar}>
                <FaBars />
            </button>
            <div ref={navRef} className="navbar-links">
                <ul>
                    <li><Link className='navbar-link navbar-brown' to='/'>Home</Link></li>
                    <li><Link className='navbar-link' to='/login'>Login</Link></li>
                    <li><Link className='navbar-link navbar-brown' to='/cart'><FaShoppingCart /></Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Header;