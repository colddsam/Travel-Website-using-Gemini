import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
  <div class="footer-container">
    <div class="footer-section">
      <h3>About Us</h3>
      <p>We are a leading tour and travel company that offers a wide range of services.</p>
      <ul>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Our Services</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: darkphoenix@gmail.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Address: 1234 College Street, Kolkata</p>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <ul class="social-media">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Tour and Travel. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer