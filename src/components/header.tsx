// src/components/Header.tsx
import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/logo.svg" alt="Blogr Logo" />
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
    </header>
  );
};

export default Header;
