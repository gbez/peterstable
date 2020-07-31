import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal, setDestination } from "../../../actions";

class DocumentTableDataRow extends Component {
  render() {
    const data = this.props.data;
    const fields = this.props.fields;

    return (
      <tr>
        {fields.map((field) => (
          <td>{data[field]}</td>
        ))}
        <td>
          <button
            onClick={() => {
              this.props.toggleModal(data);
              this.props.setDestination(`${data.endpoint}/${data._id}`);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(null, { toggleModal, setDestination })(
  DocumentTableDataRow
);
