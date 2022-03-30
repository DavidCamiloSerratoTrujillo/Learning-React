import PrimeraApp from "../PrimeraApp";//Trae todo el componente de primera app
import{shallow} from 'enzyme';//shallow es para probar los compoonentes
import React from 'react';
import '@testing-library/jest-dom'
describe('Pruebas en <PrimeraApp>',()=>{

    test('debe demostrar <PrimeraApp/> correctamente',()=>{//Para verificar que se está mostrando correctamente se usa toMatchSnapshot
       
        const saludo = 'Hola, soy goku';
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>);
        expect(wrapper).toMatchSnapshot();//Para verificar que se muestra correctamente creo

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