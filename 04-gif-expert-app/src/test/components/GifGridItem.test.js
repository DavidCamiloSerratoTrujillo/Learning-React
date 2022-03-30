import{shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';
import React from 'react';

import '@testing-library/jest-dom'

describe("Probar GridGifItem",()=>{
    const title = "Soy un titulo";
    const url = 'https://localhost/algo.jpg;'
    let wrapper= shallow (<GifGridItem title = {title} url = {url}/>);
    beforeEach(()=>{
        wrapper = shallow (<GifGridItem title = {title} url = {url}/>);

    });
    test('should show the component correctly', () => { 

    expect(wrapper).toMatchSnapshot();

     });
     test('Debe tener un parrafo con el title',()=>{
        const textoParrafo = wrapper.find('p').text().trim()
        expect(textoParrafo).toBe(title);
     });
     test('debe de tener la imagen igual al url y alt de los props', () => { 
        const img = wrapper.find('img');
        // const img = wrapper.find('img').props().src;
        // const img = wrapper.find('img').prop('src');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
      })
      test('Devb tener card', () => { 
       const div = wrapper.find('div')
       const classname = div.prop('className');
       expect(classname.includes('card')).not.toBe(false);
      });

});