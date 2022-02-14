const coincidencias = (texto,palabra) =>{
    let cantidad = 0;
    const cadena = texto.split(' ');
    cadena.map(element =>{
        if (element === palabra){
            cantidad++;
        }
    });
    return cantidad;
};

console.log(coincidencias(" oso soso oso puto xd xd xd xdd xd","xd"));