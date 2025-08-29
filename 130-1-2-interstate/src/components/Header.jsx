import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/13012_INTERSTATE_Logo_V1.jpg';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img
                    src={logo}
                    alt="Logo"
                    className="header-logo"
                />
                <h1 className="header-title">130 1/2 INTERSTATE</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;