import React, { Component } from "react";

class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      tasks: [],
      incomplete: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  handleSubmit() {
    if (this.state.input) {
      var task = { name: this.state.input, complete: false };
      this.setState({ tasks: [...this.state.tasks, task] });
      this.setState({ input: "" });
      this.setState({ incomplete: this.state.incomplete + 1 });
    }
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  toggleTask(index) {
    let newTasks = [...this.state.tasks];
    newTasks[index] = {
      ...newTasks[index],
      complete: !newTasks[index].complete,
    };
    this.setState({ tasks: newTasks });
    this.setState({
      incomplete: newTasks[index].complete
        ? this.state.incomplete - 1
        : this.state.incomplete + 1,
    });
  }

  render() {
    return (
      <>
        <div>
          <h2>Todo List</h2>
          <span>
            <input
              value={this.state.input}
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleSubmit}>Add</button>
          </span>
          <p>
            {this.state.incomplete} remaining out of {this.state.tasks.length}{" "}
            tasks
          </p>
          <ul>
            {this.state.tasks.map((el, index) => (
              <li
                className={el.complete ? "is-done" : ""}
                onClick={(e) => this.toggleTask(index)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </>
    );
  }
}

export default Repository;
