import React from 'react'
import { shallow } from 'enzyme'
import FilterableProductTable from './FilterableProductTable'

/* global it describe expect beforeEach jest */

describe('FilterableProductTable', () => {
  let wrapper, table
  let mockInventory = [
    {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'},
  ]
  beforeEach(() => {
    wrapper = shallow(<FilterableProductTable
      inventory={mockInventory}
    />)
    table = wrapper.instance()
  })
  describe('handleSelectionInput', () => {
    it('adds a new product', () => {
      table.handleSelectionInput(5, 'mockProduct')
      const state = wrapper.state()
      expect(state.selectionTotal).toEqual(5)
      expect(state.inCart).toEqual({mockProduct: 5})
    })
    it('removes a product', () => {
      table.setState({
        selectionTotal: 10,
        inCart: {mockProduct: 7}
      })
      table.handleSelectionInput(7, 'mockProduct')
      const state = wrapper.state()
      expect(state.selectionTotal).toEqual(3)
      expect(state.inCart).toEqual({})
    })
  })
})
