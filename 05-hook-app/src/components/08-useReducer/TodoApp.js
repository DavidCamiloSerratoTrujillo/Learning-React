import React, { useEffect, useReducer } from "react";
import "./index.css";
import { todoReducer } from "./TodoReducer";

import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm"
export const TodoApp = () => {
  const init = () => {

    return JSON.parse(localStorage.getItem('todos'))||[]
  };

 
  const handleAddToDo = ( newTodo ) =>{
    dispatch({
      type: "add",
      payload: newTodo,
    })
  }
    const handleDelete = (todoId)=>{
      const action = {
        type: "delete",
        payload: todoId,
      };
      dispatch(action);
  }
  const handleToggle = (todoId)=>{
    dispatch({
      type: "toggle",
      payload: todoId
    });
  }
 

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  return (
    <div>
      <h1>TodoAPP ({todos.length})</h1>
      <div className="row">
        <div className="col-7">
         <TodoList 
                todos = {todos}
                handleDelete= {handleDelete}
                handleToggle = {handleToggle}/>
        </div>
        <div className="col-5 ">
          <h4>Agregar ToDo</h4>
          <TodoForm 
            handleAddToDo ={handleAddToDo}
          />
        </div>
      </div>
    </div>
  );
};
