import React from "react";
import FeedItem from "./FeedItem";

function Section(props) {
  return (
    <div className="section">
      <h2 className="section-title">{props.name}</h2>
      <div className="line"></div>
      <div className="section-content">
        {props.feed.map((obj) => {
          return obj.title ? <FeedItem key={obj._id} item={obj} /> : null;
        })}
      </div>
    </div>
  );
}
export default Section;
