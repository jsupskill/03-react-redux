import React from 'react'

const Footer = ({todoCount, doneTodoCount}) => {
  let doneMessage = null

  if (doneTodoCount > 0) {
    doneMessage = ', Zrobione: ' + doneTodoCount
  }

  return (
    <footer className='top-panel title'>
      <span>Pozostało: {todoCount}</span>
      {doneMessage}
    </footer>
  )
}

Footer.propTypes = {
  todoCount: React.PropTypes.number,
  doneTodoCount: React.PropTypes.number
}

export default Footer
