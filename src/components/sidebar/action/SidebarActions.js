import React, { Component } from "react";
import ActionItem from "./SidebarActionItem";

class SidebarActions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebarActions">
        {this.props.actionItems.map((item) => (
          <ActionItem key={item._id} link={item.link} />
        ))}
      </div>
    );
  }
}

export default SidebarActions;
