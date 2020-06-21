import React, { Component } from "react";
import { connect } from "react-redux";
import Blog from "./Blog";

class Page extends Component {
  render() {
    let page;
    switch (this.props.page) {
      case "blog":
        page = <Blog />;
        break;
      default:
        page = <Blog />;
    }
    return <div className="page">{page}</div>;
  }
}

const mapStateToProps = (state) => {
  return { page: state.page };
};

export default connect(mapStateToProps)(Page);
