import React from 'react'
// import ReactDOM from 'react-dom'
import ProductTable from './ProductTable'
// import { shallow, mount, render } from 'enzyme'
import { shallow } from 'enzyme'

/*
global describe it beforeEach expect
 */

describe('ProductTable', () => {
  describe('handleSelectionInput', () => {
    let app, wrapper

    beforeEach(() => {
      wrapper = shallow(<ProductTable />)
      app = wrapper.instance()
    })

    it('properly increments price', () => {
      let fakeButton = {bsStyle: 'default'}
      app.handleSelectionInput(fakeButton, 299.99)
      expect(app.state.selectionTotal).toEqual(299.99)
    })

    it('properly decrements price', () => {
      let fakeButton = {bsStyle: 'success'}
      wrapper.setState({total: 299.99})
      app.handleSelectionInput(fakeButton, 299.99)
      expect(app.state.selectionTotal).toEqual(0)
    })
  })
})
