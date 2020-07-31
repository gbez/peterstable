import React, { Component, Fragment } from "react";
import { isObject, firstLetterToUpper } from "../../helpers";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { input, data } = this.props;
    var initValue = "";
    if (isObject(data)) {
      initValue = data[input.name];
      this.setState({ value: initValue });
      this.props.onChange(input.name, initValue);
    }
    this.setState({ value: initValue });
  }

  handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    if (this.props.input.type == "inputList") {
      value = [value];
    }
    this.props.onChange(name, value);
    this.setState({ value: value });
  }

  render() {
    let content;
    const { input } = this.props;
    switch (input.type) {
      case "text":
      case "date":
        content = (
          <input
            name={input.name}
            type={input.type}
            value={this.state.value}
            onChange={this.handleChange}
          />
        );
        break;
      case "select":
        content = (
          <select
            name={input.name}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value=""></option>
            {input.options.map((option) => (
              <option value={option}>{firstLetterToUpper(option)}</option>
            ))}
          </select>
        );
        break;
      case "inputList":
        content = (
          <Fragment>
            <input
              name={input.name}
              type="text"
              list={input.name}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <datalist id={input.name}>
              {input.options.map((option) => (
                <option>{firstLetterToUpper(option)}</option>
              ))}
            </datalist>
          </Fragment>
        );
        break;
    }
    return (
      <div className="formInput">
        <label>
          {input.label}
          {content}
        </label>
      </div>
    );
  }
}

export default FormInput;
