import {getHeroeById, getHeroeByOwner} from './bases/09-Multiples-Importaciones-Y-Exportaciones';
// const promesa = new Promise((resolve,reject)=>{
    

//     setTimeout(() => {
//      //console.log('2segundos');   
     
//      const heroe = getHeroeById(2);
//      //resolve(heroe);
//      reject('error');
//     }, 2000);


// });

// promesa.then((heroe)=>{
//     console.log('herore',heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>{

    return new Promise((resolve,reject)=>{
    

            setTimeout(() => {
             //console.log('2segundos');   
             
             const heroe = getHeroeById(id);
             if(heroe)
                resolve(heroe);
             else
                reject('no sé encontró el herore');
            }, 2000);
        
        
        });
}
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);