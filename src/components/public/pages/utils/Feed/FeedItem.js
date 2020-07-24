import React from "react";

function FeedItem(props) {
  return (
    <div className="feed-item">
      <div className="image-wrapper">
        <a href={props.item.url}>
          <img src={props.item.thumbnail} alt={props.item.slug} />
        </a>
      </div>

      <div className="main">
        <h1>
          <a href={props.item.url}>{props.item.title}</a>
        </h1>
        <h2>{props.item.subtitle}</h2>
      </div>

      <div className="info">
        <span>
          <p>
            <b>Published:</b> {props.item.readableDate}
          </p>
          <p>
            <b>Categor(ies):</b>{" "}
            {props.item.categories.map((el) => {
              return el ==
                props.item.categories[props.item.categories.length - 1]
                ? `${el}`
                : `${el}, `;
            })}
          </p>
          <p>
            <b>Reading Time:</b> {/*props.item.readingTime.text*/}
          </p>
          <p>
            <b>Author:</b> {props.item.author.firstName}{" "}
            {props.item.author.lastName}
          </p>
        </span>
      </div>
    </div>
  );
}
export default FeedItem;
