import React, { Component } from "react";
import RelationshipTable from "./data/RelationshipTable";
import DocumentTable from "../../utilities/tables/DocumentTable";
import data from "../../../data";

class tempRelationshipScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let fields;
    //Fields will need to be set by settings or state...not hardcoded
    fields = ["firstName", "lastName", "personalEmail"];
    return (
      <div className="relationshipScreen">
        <div className="relationshipTable">
          <DocumentTable documents={data} docFields={fields} />
        </div>
      </div>
    );
  }
}

export default tempRelationshipScreen;
