import React, { Component } from "react";

class TagInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags,
      suggestions: this.props.suggestions,
    };
    this.onAddition = this.onAddition.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e, i) {
    e.preventDefault();
    const tags = this.state.tags.slice(0);
    const newTags = tags.filter((item, index) => index != i);
    e.target = { name: this.props.name, value: newTags };
    this.props.onChange(e);
    this.setState({ tags: newTags });
  }

  onAddition(e, tag) {
    e.preventDefault();
    const tags = [].concat(this.state.tags, tag);
    e.target = { name: this.props.name, value: tags };
    this.props.onChange(e);
    this.setState({ tags });
  }

  render() {
    return (
      <div className="tagInput">
        <Tags delete={this.onDelete} tags={this.state.tags} />
        {/**
         * Add the text of input to tags
         * display suggestions based on text
         */}
        <input />
        <Suggestions
          add={this.onAddition}
          suggestions={this.state.suggestions}
        />
      </div>
    );
  }
}

class Tags extends Component {
  //onClick...delete
  render() {
    return (
      <div className="tags">
        {this.props.tags.map((tag, index) => {
          return (
            <button onClick={(e) => this.props.delete(e, index)}>{tag}</button>
          );
        })}
      </div>
    );
  }
}

class Suggestions extends Component {
  //onClick...add
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

// Why is it closing when I clock on the last item?
