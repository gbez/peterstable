import React, { Fragment, Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.addToolTipJavaScript = this.addToolTipJavaScript.bind(this);
  }

  componentDidMount() {
    document.getElementById("content").innerHTML = `${this.props.content}`;
    this.addToolTipJavaScript();
  }

  componentWillUnmount() {
    this.removeToolTipJavaScript();
  }

  addToolTipJavaScript() {
    document.querySelectorAll(".tooltip").forEach((tooltip) => {
      tooltip.addEventListener("click", () => toggleToolTip(tooltip));
    });

    function toggleToolTip(tooltip) {
      function removeDocEventListeners() {
        document.removeEventListener("keyup", hideOnEscapeKey);
        document.removeEventListener("click", hideOnOutsideClick);
      }

      var hideOnEscapeKey = function (e) {
        if (e.keyCode === 27) {
          e.preventDefault();
          tooltip.children[0].style.visibility = "hidden";
          removeDocEventListeners();
        }
      };

      var hideOnOutsideClick = function (e) {
        if (!tooltip.contains(e.target)) {
          tooltip.children[0].style.visibility = "hidden";
          removeDocEventListeners();
        } else if (tooltip.children[0] == e.target) {
          tooltip.children[0].style.visibility = "visible";
        }
      };

      if (tooltip.children[0].style.visibility === "visible") {
        tooltip.children[0].style.visibility = "hidden";
        removeDocEventListeners();
      } else {
        tooltip.children[0].style.opacity = "1";
        tooltip.children[0].style.visibility = "visible";
        document.addEventListener("keyup", hideOnEscapeKey);
        document.addEventListener("click", hideOnOutsideClick);
      }
    }
  }

  render() {
    return <div id="content" className="content"></div>;
  }
}

export default Content;
