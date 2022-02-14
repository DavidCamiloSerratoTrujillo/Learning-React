const vuelta= (palabra) =>{
    let invertida = '';
    let i = 0;
    const arr = palabra;
    invertida = arr;
    while(arr[i] !== !0){
        i++;
    }
    console.log(i);
    return invertida;
}

console.log(vuelta('camilo'));