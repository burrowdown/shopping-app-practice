import React from 'react'
import ProductRow from './ProductRow'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

/* global describe jest it beforeEach expect */

describe('ProductRow', () => {
  let wrapper, mockSelectionHandler
  let mockProduct = {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'}
  beforeEach(() => {
    mockSelectionHandler = jest.fn()
    wrapper = shallow(<ProductRow
      product={mockProduct}
      onSelectionInput={mockSelectionHandler}
      keyname={'Sporting GoodsFootball'}
      inCart={{}}
    />)
  })
  describe('handleSelectionInputChange', () => {
    // const event = {target: {value: 'mockProduct'}}
    it('calls ')
  })
})