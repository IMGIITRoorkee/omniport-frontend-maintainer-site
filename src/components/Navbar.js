import React from 'react';
import '../css/Navbar.css';
import imgLogo from '../assets/img_logo.png';

const navLinks = ['HOME', 'PROJECTS', 'BLOG', 'TEAM', 'ALUMNI', 'CULTURE'];

export default function Navbar() {
  return (
    <nav styleName="navbar">
      <div styleName="navbar__inner">
        <a href="/" styleName="navbar__logo">
          <img src={imgLogo} alt="IMG Logo" onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }} />
          <span styleName="logo-mark navbar__logo-fallback">IMG</span>
        </a>

        <ul styleName="navbar__links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} styleName="navbar__link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div styleName="navbar__cta">
          <button styleName="btn btn--outline">JOIN US</button>
          <button styleName="btn btn--solid">LOGIN</button>
        </div>
      </div>
    </nav>
  )
}
