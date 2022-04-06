import React from 'react';
import './effects.css';
import { useForm } from './hooks/useForm';

export const FormWithCustomHook = () => {
  const [formValues,handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  })
  const {name,email,password} = formValues;
  const handleSubmit = (e) =>{
    e.preventDefault();
  
  }

  return (
    <form onSubmit={handleSubmit}>
    <h1>Form with custom hook</h1>
    <hr></hr>
    <div className='form-group'>
      <input
        type= "text"
        name="name"
        className='from-control'
        placeholder='Nombre'
        autoComplete='off'
        value = {name}
        onChange = {handleInputChange}
      >
      </input>
      
    </div>
    <div className='form-group'>
      <input
        type= "text"
        name="email"
        className='from-control'
        placeholder='Email'
        autoComplete='off'
        value = {email}
        onChange = {handleInputChange}
      >
      </input>
      
    </div>
    <div className='form-group'>
      <input
        type= "password"
        name="password"
        className='from-control'
        placeholder='****'
        autoComplete='off'
        value = {password}
        onChange = {handleInputChange}
      >
      </input>
      
    </div>
    <button   type='submit' className='btn btn-primary'>Guardar</button>
    </form>
  )
}
