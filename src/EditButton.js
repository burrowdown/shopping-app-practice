import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'


export default class EditButton extends Component {
  render () {
    if (this.props.isEditable) {
      return (
        <div id='Button-bar'>
          <Button>Save</Button>
          <Button onClick={this.props.onEditableChange}>Clear</Button>
        </div>
      )
    } else {
      return (
        <div id='Button-bar'>
          <Button onClick={this.props.onEditableChange}>Edit</Button>
        </div>
      )
    }
  }
}

EditButton.propTypes = {
  isEditable: PropTypes.bool,
  onEditableChange: PropTypes.func
}
