import React from "react";
import { useAdvice } from "./adviceContext";

const Advice: React.FC = () => {
  const { advice, loading, error } = useAdvice();

  if (loading)
    return (
      <p className="text-primary-light-cyan text-lg py-3 font-bold">
        Loading<span className="animate-fadeDot delay-0">.</span>
        <span className="animate-fadeDot delay-150">.</span>
        <span className="animate-fadeDot delay-300">.</span>
      </p>
    );
  if (error)
    return (
      <p className="text-primary-light-cyan text-lg py-3 font-bold">
        Error: {error}
      </p>
    );

  return (
    <p className="text-primary-light-cyan text-lg py-3 font-bold">"{advice}"</p>
  );
};

export default Advice;
