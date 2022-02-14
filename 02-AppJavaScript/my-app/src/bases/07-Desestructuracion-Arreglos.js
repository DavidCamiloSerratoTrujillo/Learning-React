//Asignacion Desestructurante
//Desestructuracion de arreglos

const personajes = ['Goku','Vegeta','Trunks'];
const[,,p3] = personajes;
console.log(p3);
const retornaArreglo =()=>{
    return['ABC',123]
};
const [letter,number] = retornaArreglo();
console.log(letter,number);


const usState = (valor) =>{
    return[valor, ()=>{console.log('Holamundo')}];
}

const {nombre,setNombre} = usState('Goku');
console.log(nombre,setNombre());