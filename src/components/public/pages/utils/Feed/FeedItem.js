import React from "react";

function FeedItem(props) {
  return (
    <div className="feed-item">
      <div className="main">
        <a href={props.item.url}>
          <img
            src={props.item.thumbnail}
            alt={props.item.slug}
            width="100px"
            height="100px"
          />
        </a>

        <h1>
          <a href={props.item.url}>{props.item.title}</a>
        </h1>
        <h2>{props.item.subtitle}</h2>
        <h3>{props.item.description}</h3>
      </div>
      <div className="info">
        <p>
          <b>Date:</b> {props.item.readableDate}
        </p>
        <p>
          <b>Category:</b>{" "}
          {props.item.categories.map((el) => {
            return el == props.item.categories[props.item.categories.length - 1]
              ? `${el}`
              : `${el}, `;
          })}
        </p>
        <p>
          <b>Reading Time:</b> {props.item.readingTime.text}
        </p>
        <p>
          <b>Author:</b> {props.item.author.firstName}{" "}
          {props.item.author.lastName}
        </p>
      </div>
    </div>
  );
}
export default FeedItem;
