// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Optionnel : pour les styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src="/assets/logo-apc-zighoud-youcef.png"
          alt="Logo APC Zighoud Youcef"
          className="footer-logo-img"
        />
      </div>
      <div className="footer-info">
        <p>© {new Date().getFullYear()} APC Zighoud Youcef – Wilaya de Constantine</p>
        <p>Adresse : Rue principale, Zighoud Youcef, Constantine</p>
        <p>Email : contact@apc-zighoud.dz</p>
      </div>
    </footer>
  );
};

export default Footer;