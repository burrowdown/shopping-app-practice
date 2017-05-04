import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

export default class ProductRow extends Component {
  constructor (props) {
    super(props)
    this.handleSelectionInputChange = this.handleSelectionInputChange.bind(this)
  }

  handleSelectionInputChange (e) {
    const price = this.props.product.price
    const button = e.target
    this.props.onSelectionInput(button, price)
  }

  render () {
    if (this.props.product.stocked) {
      return (
        <tr>
          { /* TODO: Fix this function */ }
          <td><Button onClick={this.handleSelectionInputChange} bsStyle={this.props.buttonStyle} bsSize='small' block>
            Buy This
          </Button></td>
          <td>{this.props.product.name}</td>
          <td>${this.props.product.price}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td><Button disabled bsSize='small' block>Unavailable</Button></td>
          <td><span style={{color: 'red'}}>{this.props.product.name}</span></td>
          <td>${this.props.product.price}</td>
        </tr>
      )
    }
  }
}

ProductRow.propTypes = {
  product: PropTypes.object,
  onSelectionInput: PropTypes.func,
  buttonStyle: PropTypes.string
}
