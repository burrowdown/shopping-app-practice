import React from 'react'
import SearchBar from '../SearchBar'
import { shallow } from 'enzyme'
/* global it describe expect beforeEach jest */
describe('SearchBar', () => {
  let wrapper, mockSearchSting, mockFilterStocked
  beforeEach(() => {
    mockSearchSting = jest.fn()
    mockFilterStocked = jest.fn()
    wrapper = shallow(<SearchBar
      handleSearchString={mockSearchSting}
      handleFilterStockedToggle={mockFilterStocked}
    />)
  })
  describe('searchStringBox', () => {
    const event = {target: {value: 'bacon'}}
    it('makes a callback from text input', () => {
      wrapper.find('#searchStringBox').simulate('change', event)
      expect(mockSearchSting).toBeCalled()
    })
    it('recieves the argument of the text entered', () => {
      expect(mockSearchSting.mock.calls[0][0]).toBe('bacon')
    })
  })
  describe('filterStockedCheckBox', () => {
    it('makes a callback from onclick', () => {
      wrapper.find('#searchStringBox').simulate('click')
      expect(mockFilterStocked).toBeCalled()
    })
  })
})
