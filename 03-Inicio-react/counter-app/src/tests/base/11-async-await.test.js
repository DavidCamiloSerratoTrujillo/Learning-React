import { getImagen } from "../../base/11-async-await";

describe('Pruebas 11-async',()=>{

    test('debe retornar el url de la imagen',async ()=>{
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });

});