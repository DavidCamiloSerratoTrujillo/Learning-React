import React, { useEffect, useReducer } from "react";
import "./index.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../02-useEffect/hooks/useForm";
export const TodoApp = () => {
  const init = () => {

    return JSON.parse(localStorage.getItem('todos'))||[]

    // return [
    //   {
    //     id: new Date().getTime(),
    //     desc: "Aprender REact",
    //     done: false,
    //   },
    // ];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };
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
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  return (
    <div>
      <h1>TodoAPP ({todos.length})</h1>
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className = {`${todo.done && 'complete'}`}onClick={()=>handleToggle(todo.id)}>
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger" onClick={()=>{handleDelete(todo.id)}}>Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5 ">
          <h4>Agregar ToDo</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
              onChange={handleInputChange}
              value={description}
            ></input>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-primary mt-2">
                {" "}
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
