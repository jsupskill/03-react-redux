import React, { PropTypes } from 'react'

const Todo = ({ markCompleted, markPriority, completed, priority, text }) => {
  const completedStyle = completed ? 'completed' : ''
  const completedStyleIcon = completed ? 'glyphicon-ok-circle' : 'glyphicon-remove-circle'
  const prioStyleIcon = priority ? 'glyphicon glyphicon-star' : 'glyphicon-star-empty'

  return (
    <a href='#'
      className={'task-item ' + completedStyle}
    >
      <span className='task-check' onClick={markCompleted}>
        <span className={'glyphicon ' + completedStyleIcon} aria-hidden='true' />
      </span>
      <span className='task-inner'>{text}</span>
      <span className='task-priority' onClick={markPriority}>
        <span className={'glyphicon ' + prioStyleIcon} aria-hidden='true' />
      </span>
    </a>
  )
}

Todo.propTypes = {
  markCompleted: PropTypes.func.isRequired,
  markPriority: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  priority: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
