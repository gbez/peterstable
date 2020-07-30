import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../../../../actions";
import { getSafe, filterFeed } from "../../../../utilities/helpers";
import Section from "./Section";
import FeedItem from "./FeedItem";

class Feed extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    var feed = getSafe(() => this.props.feed.data.data, []);
    return (
      <Fragment>
        {this.props.children}
        <div className="feed">
          {this.props.sections.map((section) => {
            return (
              <Section
                name={section.name}
                feed={filterFeed(feed, section.filter, section.numItems)}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { loadFeed })(Feed);
