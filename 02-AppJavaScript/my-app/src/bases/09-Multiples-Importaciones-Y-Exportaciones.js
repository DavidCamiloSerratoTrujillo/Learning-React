import heroes,{owner}from '../data/heroes';
export const getHeroeById = (id) =>{
    return heroes.find(element => element.id === id);
}
export const getHeroeByOwner = (owner) =>{
    return heroes.filter((element) => element.owner === owner);
}


//console.log(getHeroeById(2));
//console.log(getHeroeByOwner('Marvel'));