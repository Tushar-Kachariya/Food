import React from 'react'
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

export default function Footer() {
  
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque nam, iste distinctio nesciunt eius repellendus.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        <div className="footer-content-center">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-233-4569</li>
            <li>contact@tometo.com</li>
          </ul>
        </div>

      </div>

      <hr className="footer-line" />

      <p className='footer-copyright'>
        Copyright 2026 © Tometo.com - All Rights Reserved.
      </p>
    </div>
  )
}
