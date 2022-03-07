//Numero Capicua
const invertirNumero = (numero) =>{
    let bandera = false;
    let n = 0;
    let aux = numero;
    let digito = 0;

    while(aux>0){
        
        digito = aux%10;
        n = (10*n)+digito;
        aux = Math.floor(aux/10);
    }
    if(n===numero){
        bandera = true;

    }
    return bandera;
}
const problema = (arr)=>{

}
const llenar = ()=>{
    
}
console.log(invertirNumero());