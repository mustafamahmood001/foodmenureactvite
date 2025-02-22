import React from 'react'

const Footer = () => {
    return (
        <footer className="footerNavbar">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>📞 +44 0011001100</p>
              <p>✉ info@burgerlab.com</p>
            </div>
            <div className="footer-section">
              <h3>Help</h3>
              <p>FAQs</p>
              <p>Support</p>
              <p>Order Tracking</p>
            </div>
            <div className="footer-section">
              <h3>Address</h3>
              <p>123 Burger Street</p>
              <p>London, United Kingdom</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Burger LAB. All rights reserved.</p>
          </div>
        </footer>
      );
    };
export default Footer