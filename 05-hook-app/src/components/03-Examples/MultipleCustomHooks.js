import React from "react";
import { useCounter } from "../01-useState/hooks/useCounter";
import "../02-useEffect/effects.css";
import { useFetch } from "./hooks/useFetch";

export const MultipleCustomHooks = () => {
  const{counter,increment} = useCounter(1);
  const { loading,data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author,quote} = !!data&&data[0];

  return (
    <>
      <h1>breaking Bad quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary"
        onClick={increment}>
        Siguiente quote
      </button>
    </>
  );
};
