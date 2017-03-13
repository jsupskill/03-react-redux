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

  render () {
    return (
      <div className='todosWrapper'>
        <div className='top-panel title'>Skrzynka spraw</div>
        <AddTodo addTodo={this.props.addTodo} />
        <Tasks
          todos={this.props.todos}
          markCompleted={this.props.markCompleted}
          markPriority={this.props.markPriority}
        />
      </div>)
  }
})
