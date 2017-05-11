import React, { Component } from 'react'
// import './App.css'
import FilterableProductTable from './FilterableProductTable'
import { Jumbotron, Grid, Col } from 'react-bootstrap'

/* global fetch */

const SERVER_ROOT = 'https://inventory-d0b69.firebaseio.com/'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inventory: []
    }
  }
  componentWillMount () {
    fetch(`${SERVER_ROOT}/catalog.json`)
      .then((response) => {
        return response.json()
      })
      .then((catalog) => {
        this.setState({inventory: catalog})
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render () {
    return (
      <Grid>
        <Col xs={12} md={8}>
          <Jumbotron>
            <h2>Balls and Phones Galore</h2>
          </Jumbotron>
          <FilterableProductTable
            inventory={this.state.inventory}
          />
        </Col>
      </Grid>
    )
  }
}

export default App
