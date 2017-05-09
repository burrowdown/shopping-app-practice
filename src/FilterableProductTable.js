import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import PropTypes from 'prop-types'

export default class FilterableProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false,
      selectionTotal: 0,
      buttonStyle: 'default',
      inCart: {}
    }
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
    this.handleInStockInput = this.handleInStockInput.bind(this)
    this.handleSelectionInput = this.handleSelectionInput.bind(this)
  }

  handleFilterTextInput (filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockInput (inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  handleSelectionInput (price, product) {
    let newTotal
    let currentCart = Object.assign({}, this.state.inCart)

    if (Object.keys(this.state.inCart).indexOf(product) === -1) {
      newTotal = this.state.selectionTotal + price
      currentCart = Object.assign(this.state.inCart, {[product]: price})
    } else {
      newTotal = this.state.selectionTotal - price
      delete currentCart[product]
    }

    this.setState({
      selectionTotal: newTotal,
      inCart: currentCart
    })
  }

  render () {
    return (
      <section>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
          inStockOnly={this.state.inStockOnly}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          inventory={this.props.inventory}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onSelectionInput={this.handleSelectionInput}
          selectionTotal={this.state.selectionTotal}
          buttonStyle={this.state.buttonStyle}
          inCart={this.state.inCart}
        />
      </section>
    )
  }
}

FilterableProductTable.propTypes = {
  inventory: PropTypes.array
}
