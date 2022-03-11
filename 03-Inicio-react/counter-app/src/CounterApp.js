import React,{useState} from 'react';    
import PropTypes from 'prop-types'; 
    
    
    const CounterApp = ({value}) =>{
        const [counter,setCounter] = useState(value);

        const handleAdd = (e) =>{
            // setCounter(counter+1);
            setCounter((c)=> c+1);
        }
        const handledSubtract = () =>{
            setCounter(counter-1);
        }
        const handledReset = () =>{
            setCounter(value);
        }
        return(
            <>
                <h1>Counter App</h1>
                <h2>{counter}</h2>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handledReset}>Reset</button>
                <button onClick={handledSubtract}>-1</button>
            </>
        );
        
    }
    CounterApp.propTypes ={
        value: PropTypes.number
    }

    export default CounterApp;
    