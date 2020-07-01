import React, { Component } from "react";
import ReactDOM from "react-dom";
import DocumentModal from "./DocumentModal/DocumentModal";
import AuthModal from "./AuthModal/AuthModal";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById("modal");
    this.ref = React.createRef();
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    //If the escape key is pressed
    const { toggleModal } = this.props;
    if (e.keyCode === 27) {
      console.log("ESC PRESSED");
      e.preventDefault();
      toggleModal();
      window.removeEventListener("keyup", this.handleKeyUp, false);
    }
  }

  handleOutsideClick(e) {
    const { toggleModal } = this.props;
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      console.log("Pressed Outside");
      toggleModal();
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  }

  render() {
    let modalChild;
    const modalType = this.props.modalSettings.modalType;
    switch (modalType) {
      case "document":
        modalChild = (
          <DocumentModal
            ref={this.ref}
            toggleModal={this.props.toggleModal}
            document={this.props.document}
          />
        );
        break;
      case "auth":
        modalChild = (
          <AuthModal ref={this.ref} toggleModal={this.props.toggleModal} />
        );
        break;
      default:
        modalChild = <DocumentModal ref={this.ref} />;
    }
    return ReactDOM.createPortal(modalChild, this.el);
  }
}

export default Modal;