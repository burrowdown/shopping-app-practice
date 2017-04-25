import React, {Component} from 'react'
import ProductRow from './ProductRow'
import PropTypes from 'prop-types'

export default class ProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {selectionTotal: 0}

    this.handleSelectionInput = this.handleSelectionInput.bind(this)
  }

  handleSelectionInput (value, price) {
    let newTotal

    if (value) {
      newTotal = this.state.selectionTotal + price
    } else {
      newTotal = this.state.selectionTotal - price
    }

    this.setState({
      selectionTotal: newTotal
    })
  }

  render () {
    let rows = []
    let lastCategory = null

    this.props.inventory.forEach((inventoryRow) => {
      if (inventoryRow.name.indexOf(this.props.filterText) === -1 || (!inventoryRow.stocked && this.props.inStockOnly)) {
        return
      }

      if (inventoryRow.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={inventoryRow.category} key={inventoryRow.category} />)
      }
      lastCategory = inventoryRow.category

      const keyname = inventoryRow.category + inventoryRow.name

      rows.push(<ProductRow
        product={inventoryRow}
        key={keyname}
        onSelectionInput={this.handleSelectionInput}
            />)
    })
    rows.push(<ProductPriceTotalRow key='displayTotal' selectionTotal={this.state.selectionTotal} />)

    return (
      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class ProductCategoryRow extends Component {
  render () {
    return (
      <tr>
        <td colSpan='3'><strong>{this.props.category}</strong></td>
      </tr>
    )
  }
}

class ProductPriceTotalRow extends Component {
  render () {
    return (
      <tr>
        <td />
        <td><h4>Shopping Cart total:</h4></td>
        <td><h4>${this.props.selectionTotal}</h4></td>
      </tr>
    )
  }
}

ProductTable.propTypes = {
  inventory: PropTypes.object,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}

ProductPriceTotalRow.propTypes = {
  selectionTotal: PropTypes.number
}
