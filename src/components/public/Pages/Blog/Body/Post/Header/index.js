import React from "react";
import HeaderItem from "./HeaderItem";

const Header = (props) => {
  return (
    <div className="header">
      <HeaderItem>
        <h1>{props.title}</h1>
      </HeaderItem>
      <HeaderItem>
        <h3>{props.subtitle}</h3>
        <span>
          <p>{props.author.firstName}</p>
        </span>
      </HeaderItem>
    </div>
  );
};

export default Header;
