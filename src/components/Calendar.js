import React from 'react'

export default React.createClass({
  propTypes: {
    shows: React.PropTypes.string
  },

  render () {
    return <div>
      Calendar
      { this.props.shows }

      <pre>{ JSON.stringify(this.props, null, 4) }</pre>
    </div>
  }
})
