import React, { Component } from "react";
import ReactDOM from "react-dom";

{
  /* Do some custom parsing  */
}
class ToolTip extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      display: false,
    };
    this.toggleToolTip = this.toggleToolTip.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
    var elements = document.querySelectorAll("button.tooltip");
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", this.toggleToolTip);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  toggleToolTip() {
    this.setState({ display: !this.state.display });
  }

  handleKeyUp(e) {
    //If the escape key is pressed
    if (e.keyCode === 27) {
      console.log("ESC PRESSED");
      e.preventDefault();
      this.toggleToolTip(e);
      window.removeEventListener("keyup", this.handleKeyUp, false);
    }
  }

  handleOutsideClick(e) {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      console.log("Pressed Outside");
      this.toggleToolTip(e);
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  }

  render() {
    return <div id="content" className="content"></div>;
  }
}

export default ToolTip;
