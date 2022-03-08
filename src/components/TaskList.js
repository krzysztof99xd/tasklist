import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th className='importance-title'>Importance</th>
            <th className='date-title'>Date</th>
            <th className='actions-title'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TaskItem
              key={index}
              taskItem={task}
              id={index}
              deleteTask={this.props.deleteTask}
              editTask={this.props.editTask}
              toggleTask={this.props.toggleTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}