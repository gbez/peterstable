import React, { Component } from "react";
import axios from "axios";
import RelationshipTable from "./data/RelationshipTable";
import DocumentTable from "../../utilities/tables/DocumentTable";
import data from "../../../data";

class tempRelationshipScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
    };
  }

  componentDidMount() {
    const url = "/users";
    axios.interceptors.request.use((request) => {
      console.log("Request", request);
    });

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        this.setState({ userName: res.data.user.firstName });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {}

  //Load database query here given pageName
  render() {
    return (
      <div className="relationshipScreen">
        <p>{this.state.userName}</p>
        <div className="relationshipTable">
          <DocumentTable
            documents={data}
            docFields={this.props.docFields}
            toggleModal={this.props.toggleModal}
          />
        </div>
      </div>
    );
  }
}

export default tempRelationshipScreen;
