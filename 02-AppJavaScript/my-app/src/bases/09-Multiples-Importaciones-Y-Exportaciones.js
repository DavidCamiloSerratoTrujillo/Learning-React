import heroes,{owner}from './data/heroes';
const getHeroeById = (id) =>{
    return heroes.find(element => element.id === id);
}
const getHeroeByOwner = (owner) =>{
    return heroes.filter((element) => element.owner === owner);
}
console.log(getHeroeById(2));
console.log(getHeroeByOwner('Marvel'));