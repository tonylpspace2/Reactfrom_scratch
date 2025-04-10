import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">CONTACT US</h1>
            <div className="contact-content">
                <div className="contact-section">
                    <h2 className="section-title">GET IN TOUCH</h2>
                    <p className="section-text">
                        Have questions or feedback? We'd love to hear from you! 
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="contact-section">
                    <h2 className="section-title">CONTACT FORM</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">SEND MESSAGE</button>
                    </form>
                </div>

                <div className="contact-section">
                    <h2 className="section-title">OTHER WAYS TO REACH US</h2>
                    <div className="contact-methods">
                        <div className="contact-method">
                            <span className="method-icon">📧</span>
                            <p>support@8bitsocial.com</p>
                        </div>
                        <div className="contact-method">
                            <span className="method-icon">📱</span>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="contact-method">
                            <span className="method-icon">📍</span>
                            <p>8-Bit Street, Pixel City</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;