import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas 02-template string',()=>{

    test('prueba en el metodo getSaludo', () => { 
        
        const nombre = "David";
        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola '+nombre);
     })
     //getSaludo dedbe retornar Hola Carlos Si no hay argumento
     test('prueba 2', () => { 
        
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos');
     })
});