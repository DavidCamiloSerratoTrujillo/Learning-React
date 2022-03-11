import '@testing-library/jest-dom'
import {getUser,getUsuarioActivo}  from '../../base/05-funciones'
describe('Pruebas en 05-Funciones',()=>{
    test('getUser debe retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( user ).toEqual(userTest);    
     })

     //getUsuarioActivo debe retornar un objeto
     test('getUserActivo debe retornar un objeto', () => { 
        const nombre = 'camilo';

        const userTest1 = {
            uid: 'ABC567',
            username: nombre
        }

        const user1 = getUsuarioActivo(nombre);
        expect( user1 ).toEqual(userTest1);    
     })

})