import React from 'react'
import AddTodo from '../containers/AddTodo'
import Tasks from '../components/Tasks'

export default React.createClass({
  propTypes: {
    todos: React.PropTypes.array,
    markCompleted: React.PropTypes.func,
    markPriority: React.PropTypes.func,
    addTodo: React.PropTypes.func
  },

  filterPriorityTasks () {
    return this.props.todos.filter(t => t.priority)
  },

  render () {
    return (
      <div className='todosWrapper'>
        <div className='top-panel title'>Priorytety</div>
        <AddTodo addTodo={(text) => this.props.addTodo(text, true)} />
        <Tasks
          todos={this.filterPriorityTasks()}
          markCompleted={this.props.markCompleted}
          markPriority={this.props.markPriority}
        />
      </div>)
  }
})
