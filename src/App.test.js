import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow, mount, render } from 'enzyme'

describe('App', () => {
    describe('onIsBuying', () => {
        let app, wrapper

        beforeEach (() => {
            wrapper = shallow(<App/>)
            app = wrapper.instance()
        })

        it('properly increments price', () => {
            app.onSelectionInput('product1', true, 299.99)
            expect(app.state.selectionTotal).toEqual(299.99)
        })

        it('properly decrements price', () => {
            wrapper.setState({total: 299.99})
            app.onSelectionInput('product1', false, 299.99)
            expect(app.state.selectionTotal).toEqual(0)
        })
    })

})