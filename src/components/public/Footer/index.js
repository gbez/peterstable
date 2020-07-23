import React from "react";
import FooterItem from "./FooterItem";
import FooterLinks from "./FooterLinks";

const Footer = (props) => {
  return (
    <div className="footer">
      <p>&copy; Copyright {new Date().getFullYear()}, Grant Besner</p>
    </div>
  );
};

export default Footer;
