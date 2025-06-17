// src/components/Navbar.jsx
import React, { useState } from 'react';

import '../styles/Navbar.scss';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
  <         span className="logo-main">MKZ</span> <span className="logo-sub">Studio</span>
        </div>


        <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
        </nav>

        <div className="navbar__toggle" onClick={toggleMenu}>
          <span className="navbar__burger"></span>
          <span className="navbar__burger"></span>
          <span className="navbar__burger"></span>
        </div>
      </div>
    </header>
  );
}
