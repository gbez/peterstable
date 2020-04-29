import React, { Component } from "react";
import Modal from "react-modal";
import axios from "axios";

class RelationshipModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.relationship.firstName,
      lastName: props.relationship.lastName,
      email: props.relationship.email
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmitRelationship = this.handleSubmitRelationship.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmitRelationship() {
    let relationship = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };
    if (this.props.isCreating) {
      const url = "/relationships";
      axios.post(url, relationship).then(res => {
        console.log(res);
      });
    } else {
      const url = `/relationships/${this.props.relationship._id}`;
      axios.patch(url, relationship).then(res => {
        console.log(res);
      });
    }
    this.props.onRequestClose();
    window.location.reload();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <h1>Create Relationships</h1>
        <form onSubmit={this.handleRelationship}>
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.onChange}
            ></input>
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.onChange}
            ></input>
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onChange}
            ></input>
          </label>
          <br />
          <button onClick={this.handleSubmitRelationship}>Submit</button>
        </form>
        <p>More Text</p>
      </Modal>
    );
  }
}

export default RelationshipModal;
