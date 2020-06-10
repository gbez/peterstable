import React from "react";
import FooterItem from "./FooterItem";
import FooterLinks from "./FooterLinks";

const Footer = (props) => {
  return (
    <div className="footer">
      <p>Footer</p>
      <FooterItem />
      <FooterLinks />
    </div>
  );
};

export default Footer;
