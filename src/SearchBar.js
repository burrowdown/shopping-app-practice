import React, {Component} from 'react'


export default class SearchBar extends Component {

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value)
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked)
    }

    render() {
        return (
            <form>
                <input
                    id="searchbar-input"
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange.bind(this)}
                />
                <p><input
                    id="checkbox-inStock"
                    type="checkbox"
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockInputChange.bind(this)}
                />
                    Only show products in stock</p>
            </form>
        )
    }
}
