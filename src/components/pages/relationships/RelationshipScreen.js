import React, { Component } from "react";
import RelationshipTable from "./data/RelationshipTable";
import Modal from "react-modal";
import axios from "axios";
import RelationshipModal from "./modals/RelationshipModal";

Modal.setAppElement(document.getElementById("root"));

class RelationshipScreen extends Component {
  constructor(props) {
    //call super to inherit from parent
    super(props);
    //set state
    this.state = {
      modalIsOpen: false,
      isCreating: true,
      relationship: [],
    };
    //bind specific Methods
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
    this.editRelationship = this.editRelationship.bind(this);
  }
  //Component Lifecycle Methods

  //Component Specific Methods
  openModal() {
    console.log("request modal open");
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    console.log("request modal close");
    this.setState({ modalIsOpen: false });
  }

  onRequestClose() {
    this.setState({ modalIsOpen: false });
  }

  editRelationship(relationship) {
    console.log("screen rel: " + relationship.firstName);
    this.setState({ isCreating: false, relationship: relationship });
    this.openModal();
  }

  render() {
    let modal;
    if (this.state.modalIsOpen) {
      modal = (
        <RelationshipModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          relationship={this.state.relationship}
          isCreating={this.state.isCreating}
        />
      );
    } else {
      modal = <br />;
    }

    return (
      <div id="relationshipScreen">
        {modal}
        <div>
          <button onClick={this.openModal}>Create Relationships</button>
        </div>
        <div>
          <RelationshipTable editRelationship={this.editRelationship} />
        </div>
      </div>
    );
  }
}

export default RelationshipScreen;
