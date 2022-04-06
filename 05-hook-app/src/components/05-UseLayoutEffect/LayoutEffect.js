import React, {useLayoutEffect, useState,useRef} from "react";
import { useCounter } from "../01-useState/hooks/useCounter";
import "./Layout.css";
import { useFetch } from "../03-Examples/hooks/useFetch";

export const LayoutEffect = () => {
  const{counter,increment} = useCounter(1);
  const {data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author,quote} = !!data&&data[0];
  const pTag = useRef();
  const [boxSize,setBoxSize] = useState({})
    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
    
      
    }, [quote])
  return (
    <>
      <h1>LayoutEffect</h1>
      <hr />
    <pre>{JSON.stringify(boxSize,null,3)}</pre>
        {/* <div className="alert alert-info text-center">Loading...</div> */}
 
        <blockquote className="blockquote text-right">
          <p
            ref={pTag} 
            className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      
      <button className="btn btn-primary"
        onClick={increment}>
        Siguiente quote
      </button>
    </>
  );
};
