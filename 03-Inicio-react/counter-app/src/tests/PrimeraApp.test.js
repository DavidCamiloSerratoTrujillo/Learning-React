import PrimeraApp from "../PrimeraApp";
import{shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
describe('Pruebas en <PrimeraApp>',()=>{

    test('debe demostrar <PrimeraApp/> correctamente',()=>{
       
        const saludo = 'Hola, soy goku';
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el subtitulo enviado',()=>{
        const saludo = 'Hola, soy goku';
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp 
                saludo = {saludo}
                subtitulo = {subtitulo}
            />);

        const textoParrafo = wrapper.find('h2').text();    
        
        expect( textoParrafo).toBe( subtitulo );
    });
});