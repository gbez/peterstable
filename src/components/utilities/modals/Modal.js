import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { toggleModal } from "../../../actions";

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
    //listen for post request...if something is submitted close modal?
    //Do CSS stuff to document...no scroll, overlay background
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
    //Change CSS stuff back to original
  }

  handleKeyUp(e) {
    //If the escape key is pressed
    const { toggleModal } = this.props;
    if (e.keyCode === 27) {
      e.preventDefault();
      toggleModal();
      window.removeEventListener("keyup", this.handleKeyUp, false);
    }
  }

  handleOutsideClick(e) {
    const { toggleModal } = this.props;
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      toggleModal();
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  }

  render() {
    let modalContent = <div className="fake-modal">{this.props.children}</div>;
    return ReactDOM.createPortal(modalContent, this.el);
  }
}

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { toggleModal })(Modal);
