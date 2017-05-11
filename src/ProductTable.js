import React, { Component } from 'react'
import ProductRow from './ProductRow'
import PropTypes from 'prop-types'
import { Table, Panel } from 'react-bootstrap'

export default class ProductTable extends Component {
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
        keyname={keyname}
        onSelectionInput={this.props.onSelectionInput}
        buttonStyle={this.props.buttonStyle}
        inCart={this.props.inCart}
      />)
    })

    return (
      <div>
        <Table bordered hover>
          <tbody>{rows}</tbody>
        </Table>
        <ProductPriceTotalRow key='displayTotal' selectionTotal={this.props.selectionTotal} />
      </div>
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
  // TODO: Decimal rounding
  render () {
    return (
      <Panel>
        <h4>Shopping Cart total: ${this.props.selectionTotal}</h4>
      </Panel>
    )
  }
}

ProductTable.propTypes = {
  inventory: PropTypes.array,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  onSelectionInput: PropTypes.func,
  selectionTotal: PropTypes.number,
  buttonStyle: PropTypes.string,
  inCart: PropTypes.object
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}

ProductPriceTotalRow.propTypes = {
  selectionTotal: PropTypes.number
}
