import React from 'react'
import './about.css'

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">ABOUT US</h1>
      
      <div className="about-content">
        <div className="about-section">
          <h2 className="section-title">OUR MISSION</h2>
          <p className="section-text">
            Welcome to 8-BIT SOCIAL, where retro gaming meets modern social networking! 
            We're dedicated to bringing back the golden age of gaming with a pixel-perfect twist.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">THE TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👾</div>
              <h3>GAMER123</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🎮</div>
              <h3>PIXEL_ARTIST</h3>
              <p>Creative Director</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">💾</div>
              <h3>RETRO_GAMER</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">JOIN US</h2>
          <p className="section-text">
            Ready to level up your social experience? Join our community of retro gaming enthusiasts 
            and share your passion for all things 8-bit!
          </p>
          <button className="join-button">START YOUR JOURNEY</button>
        </div>
      </div>
    </div>
  )
}

export default About