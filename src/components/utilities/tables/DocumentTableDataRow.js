import React, { Component } from "react";
import Modal from "../../Modal";
import data from "../../../data.json";

class DocumentTableDataRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalIsCreating: true,
      modalDocument: null,
      modalSettings: data.settings[0].modalSettings,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    let docItem = this.props.docItem;
    let modal;
    if (this.state.showModal) {
      modal = (
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          modalSettings={this.state.modalSettings}
          isCreating={false}
          document={docItem}
        />
      );
    } else {
      modal = null;
    }
    return (
      <div>
        {modal}
        <tr>
          {this.props.docFields.map((field) => (
            <td>{docItem[field]}</td>
          ))}
          <button onClick={this.toggleModal}>ToggleModal</button>
        </tr>
      </div>
    );
  }
}

export default DocumentTableDataRow;
