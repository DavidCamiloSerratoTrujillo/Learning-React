import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs Fetch',()=>{

    test('debe de traer 10 elementos',async()=>{
        const gifs = await getGifs('goku');
        expect(gifs.length).toBe(10);
    });
    test('debe de estár vacio',async()=>{
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});