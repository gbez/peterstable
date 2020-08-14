import React, { Component } from "react";
import ImageCropInput from "../../utilities/forms/utils/Custom/ImageCropInput";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ImageCropInput aspect={9 / 16} />
      </div>
    );
  }
}
export default Dashboard;
