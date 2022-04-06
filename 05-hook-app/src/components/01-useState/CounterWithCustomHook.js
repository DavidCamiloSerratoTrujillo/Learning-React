import React from 'react'
import { useCounter } from './hooks/useCounter'
import './counter.css'
export const CounterWithCustomHook = () => {
    const {state, increment,decrement,reset } = useCounter();
  return (
      <>
      <h1>CounterWithCustomHook: {state}</h1>
      <hr></hr>
      <button className='btn btn-primary' onClick={()=>{increment(2)}}>+1</button>
      <button className='btn btn-primary' onClick={reset}>RESET</button>
      <button className='btn btn-primary' onClick={()=>{decrement(2)}}>-1</button>
      </>
    
  )
}
