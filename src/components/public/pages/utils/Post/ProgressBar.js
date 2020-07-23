import React, { Component } from "react";
import { extend } from "jquery";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (e) => {
    var bar = document.getElementById("progressBar");
    var content = document.getElementById("content");
    var headerHeight = document.getElementById("header").offsetHeight;
    var postHeight = content.offsetHeight - headerHeight;
    var currentHeight = document.documentElement.scrollTop - headerHeight;
    var percentage = currentHeight / postHeight;
    if (percentage > 0) {
      bar.style.display = "block";
      bar.style.width = `${percentage * window.innerWidth}px`;
    } else if (percentage < 0) {
      bar.style.display = "none";
    }
  };

  render() {
    return <div id="progressBar" className="progress-bar"></div>;
  }
}

export default ProgressBar;
