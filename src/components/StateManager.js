import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import Sidebar from "./sidebar/Sidebar";
import Page from "./pages/Page";
import Modal from "./Modal";
import DocumentModal from "./utilities/modals/DocumentModal/DocumentModal";
import DocumentModalFooter from "./utilities/modals/DocumentModal/DocumentModalFooter";

/*
  What the State Manager Does
    1. Keeps track of which application is running.
      a. runs state.application through a swithc case and sets options
      b. passes options to NavBar, SideBar, and Page.
    2. Keeps track of screen size and passes options to NavBar, SideBar, and Page
    3. Houses the Modal that any child can later call.
    4.   
  */

class StateManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    let modal;
    if (this.state.showModal) {
      modal = (
        <Modal
          toggleModal={this.toggleModal}
          show={this.state.showModal}
          modalType="document"
        />
      );
    } else {
      modal = null;
    }
    return (
      <div className="wrapper">
        <div>
          <button onClick={this.toggleModal}>Show Modal</button>
        </div>
        {modal}
        <NavBar />
        <Sidebar />
        <Page pageName="relationships" />
      </div>
    );
  }
}

export default StateManager;
