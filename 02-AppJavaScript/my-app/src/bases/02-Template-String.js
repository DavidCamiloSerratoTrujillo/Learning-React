const nombre = "camilo";
const apellido = "serrato";

//const nombreCompleto = nombre+' '+apellido;

const nombreCompleto = `
${nombre} 
${apellido}
${1+1}
`;
console.log(getSaludo(nombre));

function getSaludo(nombre){

    return `Hola mundo ${nombre}`;
}