//Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

const Context = ({nombre,edad}) =>{

    return{
        nombreClave: nombre,
        anios: edad,
        lating:{
            lat:1233,
            long:1233,
        }
    }
};

const {nombreClave,anios,lating:{lat,long}} = Context(persona);

console.log(nombreClave,anios);
console.log(lat,long);




