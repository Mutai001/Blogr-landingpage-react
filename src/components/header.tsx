import React from 'react';
// import { logo, bgPatternIntro } from '../images';
import logo from '../images/logo.svg';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      {/* <div className="header-bg">
        <img src={bgPatternIntro} alt="Background Pattern" className="header-bg-pattern" />
      </div> */}
      <nav>
        <div className="logo">
          <img src={logo} alt="Blogr Logo" />
        </div>
        <ul>
          <li><a href="#product">Product</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
        <div className="actions">
          <a href="#login" className="login">Login</a>
          <a href="#signup" className="signup">Sign Up</a>
        </div>
      </nav>
      <div className="header-content">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header-buttons">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
