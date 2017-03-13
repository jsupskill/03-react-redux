import React, { PropTypes } from 'react'

let AddTodo = ({ addTodo }) => {
  let input

  return (
    <div className='top-panel'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        {/* <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          Add Todo
        </button> */}

        <div className='input-group'>
          <input type='text'
            className='form-control'
            placeholder='Task...'
            ref={node => {
              input = node
            }} />
          <span className='input-group-btn'>
            <button className='btn btn-secondary' type='button'>+</button>
          </span>
        </div>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
