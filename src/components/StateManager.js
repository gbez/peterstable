import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import Sidebar from "./sidebar/Sidebar";
import Page from "./pages/Page";
import Modal from "./Modal";
import data from "../data.json";
import axios from "axios";

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
      modalIsCreating: true,
      modalDocument: null,
      navSettings: data.settings[0].navSettings,
      sidebarSettings: data.settings[0].sidebarSettings,
      pageSettings: data.settings[0].pageSettings,
      modalSettings: data.settings[0].modalSettings,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(doc) {
    //Toggle if Modal is Shown
    this.setState({ showModal: !this.state.showModal });
    //Toggle Update or Create on Modal
    //Callback function where children can pass parent doc to be updated
    if (doc) {
      this.setState({ modalIsCreating: false, modalDocument: doc });
    }
  }

  render() {
    let modal;
    if (this.state.showModal) {
      modal = (
        <Modal
          toggleModal={this.toggleModal}
          modalSettings={this.state.modalSettings}
          document={this.state.modalDocument}
        />
      );
    } else {
      modal = null;
    }
    return (
      <div className="wrapper">
        <p>
          The App Name is: <b>{this.props.appName}</b>
        </p>
        <div>
          <button onClick={this.toggleModal}>Log In</button>
        </div>
        {modal}
        <NavBar navSettings={this.state.navSettings} />
        <Sidebar sidebarSettings={this.state.sidebarSettings} />
        <Page
          pageSettings={this.state.pageSettings}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default StateManager;
