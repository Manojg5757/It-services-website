import React from "react";
import "./footer.css";
import { TiSocialInstagram } from "react-icons/ti";
import { FiLinkedin } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1>Software Services</h1>
        <p>Static Website</p>
        <p>Ecommerce Website</p>
        <p>Android App</p>
        <p>Ios App</p>
        <p>Custom Software</p>
      </div>
      <div className="footer-middle">
        <h1>Digital Services</h1>
        <p>Website SEO</p>
        <p>Youtube SEO</p>
        <p>Instagram Marketing</p>
        <p>Content Creation</p>
        <p>Lead Generation</p>
      </div>
      <div className="footer-right">
        <h1>Follow Us</h1>
        <p><TiSocialInstagram />Instagram</p>
        <p><FiLinkedin />LinkedIn</p>
        <p><FaYoutube />Youtube</p>
        <p><FaXTwitter />Twitter</p>
      </div>
      <p className="copyright"><FaCopyright />All Rights Reserved</p>
      <a href="#" className="arrow"><FaArrowAltCircleUp /></a>
    </footer>
  );
};

export default Footer;
