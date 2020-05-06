import React, { Component } from "react";
import DataRow from "./DocumentTableDataRow";
import HeaderRow from "./DocumentTableHeaderRow";

class DocumentTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="documentTable">
        <table>
          <thead>
            <HeaderRow docFields={this.props.docFields} />
          </thead>
          <tbody>
            {this.props.documents.data.map((docItem) => (
              <DataRow
                key={docItem._id}
                docItem={docItem}
                docFields={this.props.docFields}
                toggleModal={this.props.toggleModal}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DocumentTable;
