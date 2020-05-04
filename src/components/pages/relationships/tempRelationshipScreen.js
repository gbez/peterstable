import React, { Component } from "react";
import RelationshipTable from "./data/RelationshipTable";
import DocumentTable from "../../utilities/tables/DocumentTable";
import data from "../../../data";

class tempRelationshipScreen extends Component {
  constructor(props) {
    super(props);
  }

  //Load database query here given pageName
  render() {
    return (
      <div className="relationshipScreen">
        <div className="relationshipTable">
          <DocumentTable documents={data} docFields={this.props.docFields} />
        </div>
      </div>
    );
  }
}

export default tempRelationshipScreen;
