import React, { useCallback, useEffect, useState } from 'react'
import {ShowIncrement} from './ShowIncrement'
import '../02-useEffect/effects.css';
export const CallbackHook = () => {
    const [counter,setCounter] = useState(10);

    
    const increment= useCallback((num)=>{
        setCounter(c=>c+num);

    },[setCounter]);
useEffect(()=>{

},[increment])
  return (
    <>
    <h1>UseCallback Hook: {counter}</h1>
    <hr/>
    <ShowIncrement increment={increment}/>
</>
   
  )
}
