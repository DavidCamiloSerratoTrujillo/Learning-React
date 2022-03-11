import { getHeroeByIdAsync } from "../../base/09-promesas";
import Heroes from "../../data/heroes";

describe('Pruebas con promesas',()=>{
    test('should return hero async',( done )=>{
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe =>{

            // expect(heroe).toBe(Heroes.find(h=>h.id === id));
            expect(heroe).toBe(Heroes[0]);
            done();
        });

    });
    test('should return dont exist',( done )=>{
        const id = 10;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });

    });


});