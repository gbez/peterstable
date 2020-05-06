import React, { Component } from "react";
import Relationships from "./relationships/tempRelationshipScreen";
import Home from "./home/HomeScreen";

//Page will switch the page being displayed so we can keep the nav and sidebar constant.
//checks pageName prop to switch between pages.
class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //conditional logic here before rendering
    let page;
    let { pageName, docFields } = this.props.pageSettings;
    switch (pageName) {
      case "relationships":
        page = (
          <Relationships
            docFields={docFields}
            toggleModal={this.props.toggleModal}
          />
        );
        break;
      //TODO: Cases to Follow
      default:
        page = <Home />;
    }

    return (
      //Do conditional of page based on props.
      <div className="page">{page}</div>
    );
  }
}

export default Page;
