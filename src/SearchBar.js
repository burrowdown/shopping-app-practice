import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControl, Panel } from 'react-bootstrap'

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
      <Panel>
        <form>
          <FormControl
            id='searchbar-input'
            type='text'
            placeholder='Search...'
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
          <Checkbox
            id='checkbox-inStock'
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          >
          Only show in-stock items</Checkbox>
        </form>
      </Panel>
    )
  }
}

SearchBar.propTypes = {
  onFilterTextInput: PropTypes.func,
  onInStockInput: PropTypes.func,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool
}
