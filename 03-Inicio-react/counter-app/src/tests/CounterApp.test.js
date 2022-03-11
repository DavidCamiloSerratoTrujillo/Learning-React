import CounterApp from "../CounterApp";
import{shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'

describe("Pruebas de counter app",()=>{
    const value = 10;
    let wrapper = shallow(<CounterApp value = {value}/>);
    beforeEach(()=>{
         wrapper = shallow(<CounterApp value = {value}/>)

    });

    test('Deberia hacer match con los snapshots',()=>{
        
        expect(wrapper).toMatchSnapshot();

    });
    test('Deberia ser igual cuando esté renderizado',()=>{
        const valueParrafo = wrapper.find('h2').text().trim();
        expect(valueParrafo).toBe("10");
        
    });
    test('Debe incrementar con el boton +1', () => { 

        wrapper.find('button').at(0).simulate('click');
        const valueParrafo = wrapper.find('h2').text().trim();
        expect(valueParrafo).toBe('11');

     });
     test('Debe decrementar con el boton -1', () => { 

        wrapper.find('button').at(2).simulate('click');
        const valueParrafo = wrapper.find('h2').text().trim();
        expect(valueParrafo).toBe('9');

     });
     test('Debe devolver al valor inicial con el boton reset', () => { 
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const valueParrafo = wrapper.find('h2').text().trim();
        
        expect(valueParrafo).toBe(value+"");

     });
});