import React, { Component } from "react";
import axios from "axios";

class RelationshipRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relationship: this.props.relationship
    };
    this.editRelationship = this.editRelationship.bind(this);
    this.deleteRelationship = this.deleteRelationship.bind(this);
  }

  editRelationship() {
    console.log("row rel: " + this.state.relationship.firstName);
    this.props.editRelationship(this.state.relationship);
  }

  deleteRelationship(event) {
    console.log(event.target.value);
    const url = `/relationships/${event.target.value}`;
    axios.delete(url).then(res => {
      console.log(res);
      window.location.reload();
    });
  }

  render() {
    let relationship = this.state.relationship;
    return (
      <tr>
        <td>{relationship.firstName}</td>
        <td>{relationship.lastName}</td>
        <td>{relationship.email}</td>
        <td>
          <button onClick={this.editRelationship}>Edit</button> |
          <button value={relationship._id} onClick={this.deleteRelationship}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default RelationshipRow;
