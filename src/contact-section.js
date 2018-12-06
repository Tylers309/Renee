import React, { Component } from 'react';
import './contact-section.css';

const Contact = () => (


  <div className="bottom-container">
    <div className="contact-holder">
      <p className="find-text"> How to find me </p>
      <div className="social-container">
        <span><a href="https://www.instagram.com/rsutton05/" target="_blank"> Instagram </a></span>
        <span><a href="https://www.facebook.com/ohmyposhreneesutton/" target="_blank"> Facebook</a> </span>
        <span><a href="https://www.perfectlyposh.com/?consultant=reneesutton&eventID=&statID=35128267&siteID=9991881&incentiveID=2895&socialType=14&userID=1819646" target="_blank">Posh</a></span>
        <span className="no-pointer"> Blog <span className="small">(coming soon! &#x1f609;)</span> </span>
      </div>
    </div>
  </div>
);


export default Contact;
