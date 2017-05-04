import React, { Component } from 'react'
// import './App.css'
import FilterableProductTable from './FilterableProductTable'
import { Jumbotron, Grid, Col } from 'react-bootstrap'

const INVENTORY = [
  {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: 399.99, stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7'}
]

class App extends Component {
  render () {
    return (
      <Grid>
        <Col xs={12} md={8}>
          <Jumbotron>
            <h2>Balls and Phones Galore</h2>
          </Jumbotron>
          <FilterableProductTable
            inventory={INVENTORY}
          />
        </Col>
      </Grid>
    )
  }
}

export default App
