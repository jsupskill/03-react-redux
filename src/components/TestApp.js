import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router'
import Footer from './Footer'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  componentDidMount () {
    console.log('componentDidMount')
  },

  getInitialState () {
    return {
      todos: [
        { id: 1, completed: false, text: 'Task 1', priority: false },
        { id: 2, completed: false, text: 'Task 2', priority: false },
        { id: 3, completed: false, text: 'Task 3', priority: false }
      ]
    }
  },

  nextId: 4,

  markCompleted (taskId) {
    const foundTodo = _.find(this.state.todos, todo => todo.id === taskId)
    foundTodo.completed = !foundTodo.completed

    this.setState({ todos: this.state.todos })
  },

  markPriority (taskId) {
    const foundTodo = _.find(this.state.todos, todo => todo.id === taskId)
    foundTodo.priority = !foundTodo.priority

    this.setState({ todos: this.state.todos })
  },

  addTodo (text, priority = false) {
    const newTodo = {
      id: this.nextId++,
      completed: false,
      priority: priority,
      text: text
    }

    this.state.todos.push(newTodo)
    this.setState({ todos: this.state.todos })
  },

  sortTasks () {
    return this.state.todos.sort(function (a, b) {
      return (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
    })
  },

  render () {
    var activeTodoCount = this.state.todos.reduce(function (count, todo) {
      return todo.completed ? count : count + 1
    }, 0)

    var doneTodoCount = this.state.todos.length - activeTodoCount

    return (
      <div className='mainApp'>
        <div className='navbar'>
          <nav>
            <Link activeClassName='active' to='/na'>Priorytety</Link>
            <Link activeClassName='active' onlyActiveOnIndex to='/'>Skrzynka spraw</Link>
            <Link activeStyle={{ color: 'red' }} to='/calendar'>Kalendarz</Link>
          </nav>
        </div>

        <div className='tasksList'>
          {React.cloneElement(
            this.props.children,
            {
              todos: this.sortTasks(),
              markCompleted: this.markCompleted,
              markPriority: this.markPriority,
              addTodo: this.addTodo
            })}
          <Footer todoCount={activeTodoCount} doneTodoCount={doneTodoCount} />
        </div>
      </div>)
  }
})
