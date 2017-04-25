import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ProductRow extends Component {
  constructor (props) {
    super(props)
    this.handleSelectionInputChange = this.handleSelectionInputChange.bind(this)
  }

  handleSelectionInputChange (e) {
    const value = e.target.checked
    const price = this.props.product.price
    this.props.onSelectionInput(value, price)
  }

  render () {
    if (this.props.product.stocked) {
      return (
        <tr>
          <td><input type='checkbox' onChange={this.handleSelectionInputChange} /></td>
          <td>{this.props.product.name}</td>
          <td>${this.props.product.price}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td />
          <td><span style={{color: 'red'}}>{this.props.product.name}</span></td>
          <td>${this.props.product.price}</td>
        </tr>
      )
    }
  }
}

ProductRow.propTypes = {
  product: PropTypes.object,
  onSelectionInput: PropTypes.func
}
