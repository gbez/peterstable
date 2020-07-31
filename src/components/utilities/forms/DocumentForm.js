import React, { Component } from "react";
import { connect } from "react-redux";
import { getSafe, numSlash } from "../helpers";
import {
  toggleModal,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../../../actions";
import FormInput from "./utils/FormInput";

class DocumentForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var userId = getSafe(() => this.props.user.data.data._id, "");
    this.setState({ author: userId });
  }

  handleInputChange(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.toggleModal();
    console.log(this.props.destination);
    console.log(numSlash(this.props.destination) > 1);
    if (numSlash(this.props.destination) > 1) {
      this.props.updateDocument(this.props.destination, this.state);
    } else {
      this.props.createDocument(this.props.destination, this.state);
    }
  }

  render() {
    const { formInputs } = this.props;
    return (
      <div className="document-form">
        <h1>Form Title</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            {formInputs.map((formInput) => {
              return (
                <FormInput
                  input={formInput}
                  data={this.props.modal}
                  onChange={this.handleInputChange}
                />
              );
            })}
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    user: state.user,
    destination: state.destination,
  };
};

const mapDispatchToProps = {
  toggleModal,
  createDocument,
  updateDocument,
  deleteDocument,
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentForm);
