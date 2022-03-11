import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp'
import heroes from '../../data/heroes'
describe("Prueba 08",()=>{
    test("should return hero by id",()=>{
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h=>h.id === id)

        expect(heroe).toEqual(heroeData);
    });
  
    test("should return hero undefined if hero dont exist",()=>{
        const id = 0;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('sould return array whit hero by owner DC',()=>{
        const owner= "DC";
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h=>h.owner === owner)
        expect(heroes).toEqual(heroesData);

    });
    test('sould return array whit hero by owner MARVEL',()=>{
        const owner= "Marvel";
        const heroes = getHeroesByOwner(owner);
        const heroesSize =  heroes.filter(h=>h.owner === owner).length
        expect(heroes.length).toBe(heroesSize);

    });
    test('sould return undefined if hero dont exist',()=>{
        const owner= "Naruto";
        const heroes = getHeroesByOwner(owner);
       expect(heroes).toEqual([]);
    });
});