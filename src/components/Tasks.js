import React from 'react'
import Todo from './Todo'

export default React.createClass({
  propTypes: {
    todos: React.PropTypes.array,
    markCompleted: React.PropTypes.func,
    markPriority: React.PropTypes.func
  },

  render () {
    return (
      <div className='tasks'>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            markCompleted={() => this.props.markCompleted(todo.id)}
            markPriority={() => this.props.markPriority(todo.id)}
          />
        )}
      </div>
    )
  }
})
