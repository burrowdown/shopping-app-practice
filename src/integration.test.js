import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe('when filtering', () => {

    let app;

    beforeEach(() => {
        app = mount(<App/>);
    });

    it('will render the correct number of table rows', () => {
        expect(app.find('tr').length).toBe(10)
    });

    it('will remove the correct number of table rows when filtered by inStock', () => {
        const event = {target: {checked: true}};
        app.find('#checkbox-inStock').simulate('change', event);
        expect(app.find('tr').length).toBe(8)
    });

    it('will filter out rows by text input "ball"', () => {
        const event = {target: {value: 'ball'}};
        app.find('#searchbar-input').simulate('change', event);
        expect(app.find('tr').length).toBe(6)
    });

    it('will filter out rows by text input "x"', () => {
        const event = {target: {value: 'x'}};
        app.find('#searchbar-input').simulate('change', event);
        expect(app.find('tr').length).toBe(4)
    });

});

