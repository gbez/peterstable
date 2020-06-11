import React from "react";

const FeedItem = (props) => {
  return (
    <div className="feed-item">
      <h1>Title</h1>
      <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80"></img>
      <h5>Description</h5>
      <a>Read More</a>
    </div>
  );
};

export default FeedItem;
