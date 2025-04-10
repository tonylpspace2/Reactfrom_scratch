import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img src="/vapor.png" alt="Vapor Brand" className="brand-image" />
        </Link>
      </div>

      {/* Hamburger Button */}
      <button 
        className="hamburger-button"
        onClick={toggleMenu}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar 