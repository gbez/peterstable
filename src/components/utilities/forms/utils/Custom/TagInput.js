import React, { Component } from "react";

class TagInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags,
      suggestions: this.props.suggestions,
      autocomplete: [],
      input: "",
    };
    this.onAddition = this.onAddition.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  componentDidMount() {
    const newSuggestions = this.state.suggestions.filter(
      (item) => !this.state.tags.includes(item)
    );
    this.setState({ suggestions: newSuggestions });
  }

  onDelete(e, tag) {
    e.preventDefault();
    const tags = this.state.tags.slice(0);
    const newSuggestions = [].concat(this.state.suggestions, tag);
    const newTags = tags.filter((item) => item != tag);
    e.target = { name: this.props.name, value: newTags };
    this.props.onChange(e);
    this.setState({ tags: newTags, suggestions: newSuggestions });
  }

  onAddition(e, tag) {
    e.preventDefault();
    const tags = [].concat(this.state.tags, tag);
    const suggestions = this.state.suggestions.slice(0);
    const newSuggestions = suggestions.filter((item) => item != tag);
    this.setState({
      tags: tags,
      input: "",
      suggestions: newSuggestions,
      autocomplete: [],
    });
    e.target = { name: this.props.name, value: tags };
    this.props.onChange(e);
  }

  handleInputChange(e) {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    var autocomplete = this.state.suggestions.filter(
      (item) => item.startsWith(value.toLowerCase()) && value != ""
    );
    this.setState({ [name]: value, autocomplete: autocomplete });
  }

  handleInputSubmit(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
      this.onAddition(e, e.target.value);
    }
  }

  render() {
    return (
      <div className="tagInput">
        <Tags delete={this.onDelete} tags={this.state.tags} />
        <input
          name="input"
          value={this.state.input}
          autoComplete="off"
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputSubmit}
        />
        <Suggestions
          add={this.onAddition}
          suggestions={this.state.autocomplete}
        />
      </div>
    );
  }
}

class Tags extends Component {
  render() {
    return (
      <div className="tags">
        {this.props.tags.map((tag) => {
          return (
            <button onClick={(e) => this.props.delete(e, tag)}>{tag}</button>
          );
        })}
      </div>
    );
  }
}

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions">
        <ul>
          {this.props.suggestions.map((suggestion) => {
            return (
              <li
                onClick={(e) => {
                  this.props.add(e, suggestion);
                }}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TagInput;
