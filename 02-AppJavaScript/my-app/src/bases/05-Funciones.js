//Funciones en JS
//const saludar = function(nombre){

 //   return `hola, ${nombre}`;
//}

const saludar2 =  (nombre)=>{

    return `hola, ${nombre}`;
}
const saludar3 =  (nombre)=>`hola, ${nombre}`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Vegeta'));

const getUser = () =>({
        uid:'ABC',
        username: 'ElPapi234',
    })

    const getUsuarioActivo = (nombre)=>({uid:'ABC', username: nombre,});
    
    console.log(getUsuarioActivo('Camilo'));