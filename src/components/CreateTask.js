import React, { Component } from 'react';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      importance: 0,
      date: ''
    };
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ importance: event.target.value });
  };
  handleChange3 = (event) => {
    this.setState({ date: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task, this.state.importance, this.state.date);
    this.setState({ task: '' });
    this.setState({ importance: 0 });
    this.setState({ date: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
           <input
          type="number"
          placeholder="Importance of the task?"
          value={this.state.importance}
          onChange={this.handleChange2}
          autoFocus
        />  <input
        type="date"
        value={this.state.date}
        onChange={this.handleChange3}
        autoFocus
      />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    );
  }
}