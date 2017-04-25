import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import PropTypes from 'prop-types'

export default class FilterableProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false,
      selectionTotal: []
    }

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
    this.handleInStockInput = this.handleInStockInput.bind(this)
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
                />
      </section>
    )
  }
}

FilterableProductTable.propTypes = {
  inventory: PropTypes.array
}
