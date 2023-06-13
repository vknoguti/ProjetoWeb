import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import './Header.css';
import '../App.css';

const Header = ({user, logged}) => {
    const navRef = useRef();

    const logo = 'https://i.imgur.com/pGHQ2zI.png';

    const showNavBar = () => {
        navRef.current.classList.toggle("show-options");
    }

    const buttonUser = () => {
        if(logged){
            return(<Link className='navbar-link' to={`/user/${user.id}`}>{user.name}</Link>)
        } else {
            return(<Link className='navbar-link' to="/login">Login</Link>)
        }
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
                    {/* <li><Link className='navbar-link' to='/login'>Login</Link></li> */}
                    <li>{buttonUser()}</li>
                    <li><Link className='navbar-link navbar-brown' to='/cart'><FaShoppingCart /></Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Header;