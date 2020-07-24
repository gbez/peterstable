import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../../../../actions";
import { getSafe } from "../../utils/helpers";
import Section from "./Section";
import FeedItem from "./FeedItem";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.filterFeed = this.filterFeed.bind(this);
  }
  componentDidMount() {
    this.props.loadFeed();
  }

  filterFeed(filter, numItems) {
    var feed = getSafe(() => this.props.feed.data.data, []);
    var newFeed = feed.filter(function (item) {
      return item[filter.key].includes(filter.value);
    });
    return newFeed.slice(0, numItems);
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
        <div className="feed">
          {this.props.sections.map((section) => {
            return (
              <Section
                name={section.name}
                feed={this.filterFeed(section.filter, section.numItems)}
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
