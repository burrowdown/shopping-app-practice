import React, { Component } from 'react'
import ProductRow from './ProductRow'
import PropTypes from 'prop-types'
import { Table, Panel } from 'react-bootstrap'

export default class ProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectionTotal: 0,
      buttonStyle: 'default'
    }

    this.handleSelectionInput = this.handleSelectionInput.bind(this)
  }

  handleSelectionInput (button, price) {
    let newTotal
    // TODO: Fix this hacky bullshit, get button color to change when selected
    if (button.bsStyle === 'default' || button.bsStyle === undefined) {
      newTotal = this.state.selectionTotal + price
      console.log(button)
      this.setState({buttonStyle: 'success'})
    } else {
      newTotal = this.state.selectionTotal - price
      console.log(button)
      this.setState({buttonStyle: 'default'})
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
        buttonStyle={this.state.buttonStyle}
      />)
    })

    return (
      <div>
        <Table bordered hover>
          <tbody>{rows}</tbody>
        </Table>
        <ProductPriceTotalRow key='displayTotal' selectionTotal={this.state.selectionTotal} />
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
  inStockOnly: PropTypes.bool
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}

ProductPriceTotalRow.propTypes = {
  selectionTotal: PropTypes.number
}
