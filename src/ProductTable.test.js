import React from 'react'
import ProductTable from './ProductTable'
import { mount } from 'enzyme'

/* global describe it beforeEach expect */

describe('ProductTable', () => {
  let wrapper
  let mockInventory = [
    {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'}
  ]
  beforeEach(() => {
    wrapper = mount(<ProductTable
      inventory={mockInventory}
      filterText={''}
      inStockOnly
      inCart={{}}
    />)
  })
  it('renders the right number of rows', () => {
    let rowsCount = wrapper.find('tr').length
    expect(rowsCount).toBe(3)
  })
})
