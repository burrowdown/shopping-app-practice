import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow, mount, render } from 'enzyme'

// describe('App', () => {
//     describe('onIsBuying', () => {
//         let app, wrapper
//
//         beforeEach (() => {
//             wrapper = shallow(<App/>)
//             app = wrapper.instance()
//         })
//
//         it('properly increments price', () => {
//             app.onIsBuying('product1', true, 299.99)
//             const expected = {product1: true}
//             expect(app.state.isBuying).toEqual(expected)
//             expect(app.state.total).toEqual(299.99)
//         })
//
//         it('properly decrements price', () => {
//             wrapper.setState({total: 299.99})
//             app.onIsBuying('product1', false, 299.99)
//             const expected = {product1: false}
//             expect(app.state.isBuying).toEqual(expected)
//             expect(app.state.total).toEqual(0)
//         })
//     })
//
//
// })