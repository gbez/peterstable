import React, { Component } from "react";
import Action from "./action/SidebarActions";
import SortingOption from "./sorting/SidebarSortingOption";
import data from "../../data.json";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  //We want actions and sorting options to be defined in settings for each object.
  //Maybe we should have switch cases in the Statemanager
  //that set all the options and then pass them to everything.

  render() {
    let sortingOptions;
    let actions;
    sortingOptions = (
      <SortingOption name="Groups" sortingOptionItems={data.groups} />
    );
    actions = <Action actionItems={data.actionItems} />;

    return (
      <div className="sidebar">
        {sortingOptions}
        <br></br>
        {actions}
      </div>
    );
  }
}

export default Sidebar;
