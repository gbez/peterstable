import React from "react";
import FooterItem from "./FooterItem";
import FooterLinks from "./FooterLinks";

const Footer = (props) => {
  return (
    <div className="footer">
      <p>Footer</p>
      <ul>
        <li>
          <FooterItem />
        </li>
      </ul>
      <ul>
        <li>
          <FooterLinks />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
