import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this)
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this)
  }

  handleFilterTextInputChange (e) {
    this.props.onFilterTextInput(e.target.value)
  }

  handleInStockInputChange (e) {
    this.props.onInStockInput(e.target.checked)
  }

  render () {
    return (
      <form>
        <input
          id='searchbar-input'
          type='text'
          placeholder='Search...'
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p><input
          id='checkbox-inStock'
          type='checkbox'
          checked={this.props.inStockOnly}
          onChange={this.handleInStockInputChange}
        />
        Only show products in stock</p>
      </form>
    )
  }
}

SearchBar.propTypes = {
  onFilterTextInput: PropTypes.func,
  onInStockInput: PropTypes.func,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool
}
