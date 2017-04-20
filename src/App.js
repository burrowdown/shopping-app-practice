import React, {Component} from 'react'
// import './App.css'

const INVENTORY = [
    {category: "Sporting Goods", price: 49.99, stocked: true, name: "Football"},
    {category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball"},
    {category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7"}
]


class ProductRow extends Component {

    handleSelectionInputChange(e) {
        let key = this
        this.props.onSelectionInput(key)
    }

    render() {

        let name = this.props.product.stocked ? this.props.product.name :
            <span style={{color: 'red'}}>{this.props.product.name}</span>


        return (
            <tr>
                <td><input type="checkbox" onChange={this.handleSelectionInputChange.bind(this)}/></td>
                <td>{name}</td>
                <td>${this.props.product.price}</td>
            </tr>
        )

    }
}

class ProductCategoryRow extends Component {

    render() {
        return (
            <tr>
                <td colSpan="3"><strong>{this.props.category}</strong></td>
            </tr>
        )
    }
}

class ProductPriceTotalRow extends Component {

    render() {
        return (
            <tr>
                <td></td>
                <td><h4>Shopping Cart total:</h4></td>
                <td><h4>${this.props.selectionTotal}</h4></td>
            </tr>
        )
    }
}


class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {selectionTotal: 0}

        this.handleSelectionInput = this.handleSelectionInput.bind(this)
    }


    handleSelectionInput(selection) {

        console.log(selection)

        // TODO: make this actually do what I want
        let newTotal = this.state.selectionTotal + 1
        this.setState({
            selectionTotal: newTotal
        })
        // console.log(this.state)


    }

    render() {
        let rows = []
        let lastCategory = null

        this.props.inventory.forEach((inventoryRow) => {

            if (inventoryRow.name.indexOf(this.props.filterText) === -1 || (!inventoryRow.stocked && this.props.inStockOnly)) {
                return
            }

            if (inventoryRow.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={inventoryRow.category} key={inventoryRow.category}/>)
            }
            lastCategory = inventoryRow.category

            const keyname = inventoryRow.category + inventoryRow.name

            rows.push(<ProductRow
                product={inventoryRow}
                key={keyname}
                selectionTotal={this.state.selectionTotal}
                onSelectionInput={this.handleSelectionInput}
            />)
        })
        rows.push(<ProductPriceTotalRow key="displayTotal" selectionTotal={this.state.selectionTotal}/>)

        return (
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class SearchBar extends Component {

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


class FilterableProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false,
            selectionTotal: []
        }

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
        this.handleInStockInput = this.handleInStockInput.bind(this)
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
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

class App extends Component {
    render() {
        return (
            <section>
                <FilterableProductTable
                    inventory={INVENTORY}
                />
            </section>
        )
    }
}


export default App
