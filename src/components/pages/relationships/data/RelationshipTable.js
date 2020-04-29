import React, { Component } from "react";
import axios from "axios";
import RelationshipRow from "./RelationshipRow";
import RelationshipDeleteConfirm from "./../modals/RelationshipDeleteConfirm";

class RelationshipTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relationships: []
    };
    this.editRelationship = this.editRelationship.bind(this);
  }

  editRelationship(relationship) {
    console.log("table rel: " + relationship.firstName);
    this.props.editRelationship(relationship);
  }

  componentDidMount() {
    const url = "/relationships";
    axios.get(url).then(res => {
      console.log(res.data.relationships);
      this.setState({ relationships: res.data.relationships });
    });
  }

  render() {
    return (
      <div className="relationshipTable">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.relationships.map(item => (
              <RelationshipRow
                key={item._id}
                relationship={item}
                editRelationship={this.editRelationship}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RelationshipTable;
