const palindromo=(texto) =>{
    let resultado = true;
    let arr = texto.split('');
    let aux = [...arr]
    let i = arr.length-1;
    let cont = 0;
    for (i ; i >=0; i--) {
        console.log(`${arr[cont]} === ${aux[i]}`);
       if(arr[cont]=== aux[i]){
       }
       else{
           resultado=false;
       }
       cont++;
       console.log(resultado);
     }
    return resultado;
}
console.log(palindromo("oso"));