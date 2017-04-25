import React from 'react'
import ReactDOM from 'react-dom'
import ProductTable from './ProductTable'
import { shallow, mount, render } from 'enzyme'

describe('ProductTable', () => {
    describe('onIsBuying', () => {
        let app, wrapper

        beforeEach (() => {
            wrapper = shallow(<App/>)
            app = wrapper.instance()
        })

        xit('properly increments price', () => {
            app.onSelectionInput('product1', true, 299.99)
            expect(app.state.selectionTotal).toEqual(299.99)
        })

        xit('properly decrements price', () => {
            wrapper.setState({total: 299.99})
            app.onSelectionInput('product1', false, 299.99)
            expect(app.state.selectionTotal).toEqual(0)
        })
    })

})