import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed, toggleModal, setDestination } from "../../../actions";
import { getSafe, filterFeed } from "../../utilities/helpers";
import Modal from "../../utilities/modals/Modal";
import DocumentTable from "../../utilities/tables/DocumentTable";
import DocumentForm from "../../utilities/forms/DocumentForm";

class Blogposts extends Component {
  componentDidMount() {
    this.props.loadFeed("/blogposts");
  }

  render() {
    var distinct = getSafe(() => this.props.feed.data.distinct, []);
    var blogposts = getSafe(() => this.props.feed.data.data, []);
    var pending = filterFeed(blogposts, { key: "status", value: "pending" });
    var published = filterFeed(blogposts, {
      key: "status",
      value: "published",
    });
    const formInputs = [
      { name: "title", type: "text", label: "Title" },
      { name: "subtitle", type: "text", label: "Subtitle" },
      { name: "publish_date", type: "date", label: "Date" },
      { name: "description", type: "text", label: "Description" },
      {
        name: "page",
        type: "select",
        label: "Page",
        options: distinct["page"],
      },
      {
        name: "subpage",
        type: "select",
        label: "Subpage",
        options: distinct.subpage,
      },
      {
        name: "categories",
        type: "tag",
        label: "Categories",
        options: distinct.categories,
      },
      {
        name: "tags",
        type: "tag",
        label: "Tags",
        options: distinct.tags,
      },
      {
        name: "desktopThumbnail",
        type: "imageCrop",
        label: "Desktop Thumbnail",
        aspect: 16 / 9,
      },
      {
        name: "mobileThumbnail",
        type: "imageCrop",
        label: "Mobile Thumbnail",
        aspect: 9 / 16,
      },
      {
        name: "accessibleTo",
        type: "select",
        label: "Restrict To",
        options: ["all"],
      },
    ];
    let modalContent = <DocumentForm formInputs={formInputs} />;

    return (
      <Fragment>
        {this.props.modal && <Modal>{modalContent}</Modal>}
        <div className="blogposts">
          <button
            onClick={() => {
              this.props.toggleModal();
              this.props.setDestination("/blogposts");
            }}
          >
            Create Blogpost
          </button>
          <div className="section">
            <h2 className="section-title">Pending Posts</h2>
            <DocumentTable
              data={pending}
              fields={["title", "subtitle", "readableDate", "views"]}
            />
          </div>
          <br />
          <div className="section">
            <h2 className="section-title">Published Posts</h2>
            <DocumentTable
              data={published}
              fields={["title", "subtitle", "readableDate", "views"]}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed, modal: state.modal };
};

const mapDispatchToProps = {
  loadFeed,
  toggleModal,
  setDestination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogposts);
