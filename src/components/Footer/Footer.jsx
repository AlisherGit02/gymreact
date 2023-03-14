import React from "react";
import "./Footer.css";
import gitHub from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={gitHub} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
};

export default Footer;
