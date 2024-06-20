import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-section">
        <h2>Product</h2>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#marketplace">Marketplace</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#integrations">Integrations</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Company</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Connect</h2>
        <ul>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


