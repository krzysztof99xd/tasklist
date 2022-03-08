import React, { Component } from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      importance: this.props.taskItem.importance,
      date: this.props.taskItem.date,
      isEditing: false,
    };
  }
  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };
  toggleTask = () => {
    this.props.toggleTask(this.props.id);
    console.log(this.props.taskItem.importance)
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ importance: event.target.value });
  }
  handleChange3 = (event) => {
    this.setState({ date: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task, this.state.importance, this.state.date);
    this.setState({ isEditing: false });
  };
  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.task}
                  onChange={this.handleChange}
                  autoFocus
                />
                <input
                  type='number'
                  value={this.state.importance}
                  onChange={this.handleChange2}
                  autoFocus
                />
                <input
                  type='date'
                  value={this.state.date}
                  onChange={this.handleChange3}
                  autoFocus
                />
              </form>
            </td>
            <td>
              <button
                className="save"
                onClick={this.handleSubmit}
                type="submit"
              >
                Save
              </button>
              <button
                className="back"
                onClick={() => this.setEditingState(false)}
                type="button"
              >
                Back
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="task" onClick={this.toggleTask}>
              <input
                type="checkbox"
                readOnly
                checked={this.props.taskItem.isCompleted}
              />
              <span
                className={
                  this.props.taskItem.isCompleted
                    ? 'completed'
                    : 'not-completed'
                }
              >
                {this.props.taskItem.task}

              </span>

            </td>
            <td className=
              {
                (this.props.taskItem.importance > 6) ? 'importance' : 'non-importance'}>{this.props.taskItem.importance}
            </td>
            <td className='date'>
              {this.props.taskItem.date}
            </td>
            <td>
              <button
                className="edit"
                onClick={() => this.setEditingState(true)}
              >
                Edit
              </button>
              <button className="delete" onClick={this.deleteTask}>
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}