import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';
import ErrorModal from './ErrorModal';

const tasks = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : [];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
      error: null
    };
  }

  createTask = (task, importance, date) => {
    if (task.trim() === '' || importance === 0 || date.trim()=== '') {
        this.setState({error:{
            title: 'Error',
            message: "All the fields are mandatory"
        }})
      return;
    }
    tasks.push({ task, importance, date, isCompleted: false });
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  editTask = (taskId, task, importance, date) => {
    const taskItem = tasks[taskId];
    taskItem.task = task;
    taskItem.importance = importance;
    taskItem.date = date;
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  errorHandler = ( ) =>{
    console.log(this.state.error.message)
    this.setState({error: null})
  }
  render() {
    return (
    <div>
    {this.state.error && <ErrorModal
      title= {this.state.error.title}
      message={this.state.error.message}
      onConfirm= {this.errorHandler}
      />}
      <div className="main">
        <h1>Todos</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
      </div>
    );
  }
}