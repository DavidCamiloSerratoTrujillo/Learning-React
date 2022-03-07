

const vuelta= (palabra) =>{
    let invertida = '';
 
    
    for(let letra of palabra){
        invertida = letra+invertida;
    }


    return invertida;
}

console.log(vuelta('camilo'));