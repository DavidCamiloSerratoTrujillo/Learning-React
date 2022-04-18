import React from 'react'
import { useForm } from "../02-useEffect/hooks/useForm";

export const TodoForm = ({handleAddToDo}) => {
    const [{ description }, handleInputChange, reset] = useForm({ description: "", });
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
     
       handleAddToDo(newTodo)
        reset();
      };

  return (
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
  )
}
