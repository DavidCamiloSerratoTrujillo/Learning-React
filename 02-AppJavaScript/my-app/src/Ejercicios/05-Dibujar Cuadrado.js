// DIBUJAR UN CUADRADO CON ASTERISCOS
const cuadrado = (tamaño) =>{
    let concatenador = ``;
    for(let i = 0 ; i<tamaño;i++){
        concatenador+="* ";
    }

    concatenador+="\n";
    for(let i = 0 ; i<(tamaño)-2;i++){
        for(let j = 0;j<tamaño;j++){

            if(j<tamaño-1 && j>0){
                concatenador+="  ";
            }
            else if(j===0){
                concatenador+="*";
            }
            else{
                concatenador+=" *";
            }
            
        }
         concatenador+="\n";
    }
    for(let i = 0 ; i<tamaño;i++){
        concatenador+="* ";
    }
    return concatenador;
}

console.log(cuadrado(30));