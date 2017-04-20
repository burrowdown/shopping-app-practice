import React, {Component} from 'react'


export default class ProductRow extends Component {

    handleSelectionInputChange(e) {
        const value = e.target.checked
        const price = this.props.product.price
        this.props.onSelectionInput(value, price)
    }

    render() {

        if (this.props.product.stocked) {
            return (
                <tr>
                    <td><input type="checkbox" onChange={this.handleSelectionInputChange.bind(this)}/></td>
                    <td>{this.props.product.name}</td>
                    <td>${this.props.product.price}</td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td></td>
                    <td><span style={{color: 'red'}}>{this.props.product.name}</span></td>
                    <td>${this.props.product.price}</td>
                </tr>
            )
        }

    }
}