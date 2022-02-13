const persona = {
    nombre: 'Tony',
    apellidos: 'Stark',
    edad: 45,
    superHeroe: 'Iron Man',
    direccion:{
        ciudad:'New york',
        zip:52626262,
        lat:25355,
        lng:3425235,
    },
}
const persona2 = {...persona};//spread
console.log({
    persona2:persona2
    //persona
});

console.table({
    persona
});