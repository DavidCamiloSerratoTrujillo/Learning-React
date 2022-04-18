const initialstate = [{
    id:1,
    toDo: 'Comprar pan',
    done: false
}];
const todoReducer = (state = initialstate,action) =>{
    if(action?.type === 'agregar'){
        return [...state, action.payLoad]
       
    }

    return state;
}
let todos = todoReducer();
console.log(todos);
const newtodo = {
    id:2,
    toDo: 'Comprar leche',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payLoad: newtodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);