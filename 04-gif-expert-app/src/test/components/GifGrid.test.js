import {shallow} from 'enzyme';
import {GifGrid}from '../../components/GifGrid'
import React from 'react';
import {useFetchGifs} from '../../hooks/useFectchGifs'
jest.mock('../../hooks/useFectchGifs');

describe('Pruebas a componente gifGrid',()=>{
    useFetchGifs.mockReturn({
        data:[],
        loading: true
    })

    const categories = 'one push';
    let wrapper = shallow(<GifGrid categories={categories}/>)

    // beforeEach(()=>{
       
    // })

    test('Hacer match en el primer snapshot',()=>{

      

        wrapper = shallow(<GifGrid categories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        
    })

    // test('debe de mostrar items cuando se cargan imagenes',()=>{

    // })
});