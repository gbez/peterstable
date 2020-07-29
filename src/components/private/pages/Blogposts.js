import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed, toggleModal } from "../../../actions";
import { getSafe, filterFeed } from "../../utilities/helpers";
import Modal from "../../utilities/modals/Modal";
import DocumentTable from "../../utilities/tables/DocumentTable";

class Blogposts extends Component {
  componentDidMount() {
    this.props.loadFeed("/blogposts?sort=published_at");
  }

  render() {
    let modalContent = <h1>Hi</h1>;
    var distinct = getSafe(() => this.props.feed.data.distinct, []);
    var blogposts = getSafe(() => this.props.feed.data.data, []);
    var pending = filterFeed(blogposts, { key: "status", value: "pending" });
    var published = filterFeed(blogposts, {
      key: "status",
      value: "published",
    });

    return (
      <Fragment>
        {this.props.modal != null && <Modal>{modalContent}</Modal>}
        <div className="blogposts">
          <button onClick={() => this.props.toggleModal("create")}>
            Create Blogpost
          </button>
          <div className="section">
            <h2 className="section-title">Pending Posts</h2>
            <DocumentTable data={pending} fields={["title", "subtitle"]} />
          </div>
          <br />
          <div className="section">
            <h2 className="section-title">Published Posts</h2>
            <DocumentTable data={published} fields={["title", "subtitle"]} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed, modal: state.modal };
};

export default connect(mapStateToProps, { loadFeed, toggleModal })(Blogposts);
