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
    const product = this.props.keyname
    this.props.onSelectionInput(price, product)
  }

  render () {
    let style = 'default'
    let keys = Object.keys(this.props.inCart)
    keys.forEach((key) => {
      if (key === this.props.keyname) {
        style = 'success'
      }
    })
    if (this.props.product.stocked) {
      return (
        <tr>
          <td><Button onClick={this.handleSelectionInputChange} bsStyle={style} bsSize='small' block>
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
  keyname: PropTypes.string,
  inCart: PropTypes.object
}
