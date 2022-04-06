import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {
  const [formState,setFormState] = useState({
    name: '',
    email: ''

  })
  const {name,email} = formState;
  // useEffect(()=>{
  //   console.log('hey');
  // },[]);

  // useEffect(()=>{
  //   console.log('formstate');
  // },[formState]);
  // useEffect(()=>{
  //   console.log('email');
  // },[email]);

  const handleInputChange = ({target}) =>{

   setFormState({
      ...formState,
      [target.name]:target.value

   });

  }

  return (
    <>
    <h1>UseEffect</h1>
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
    {(name === '123')&&<Message/>}
    </>
  )
}
