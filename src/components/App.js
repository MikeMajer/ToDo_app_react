import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaksList';
import '../styles/App.css';


class App extends Component {

  counter = 4
  state = {
    tasks: [
      {
        id: 0,
        text: 'play my favorite game',
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'do shopping',
        date: '2018-02-20',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'clean house',
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'do workout',
        date: '2018-02-10',
        important: true,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true
  }

  render() {
    return (
      <div className="App">
        <h1> ToDo App </h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
