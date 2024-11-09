// import { useState } from "react";
import "./App.css";
import Advice from "./getAdvice";
import PatternDivider from "./assets/pattern-divider-desktop.svg";
import DiceIcon from "./assets/icon-dice.svg";
import { useAdvice } from "./adviceContext";

const App = () => {
  const { slipId, loading, fetchAdvice } = useAdvice();
  return (
    <div className="w-96 h-full bg-neutral-Dark-Grayish-Blue m-auto rounded-md p-6 font-manrope flex flex-col items-center">
      <h1 className="text-primary-Neon-Green text-xs">ADVICE #{slipId}</h1>
      <Advice />
      <img src={PatternDivider} alt="pattern divider" className="py-2" />
      <div
        className="bg-primary-Neon-Green rounded-full w-12 h-12 flex items-center -mb-12 mt-4 hover:shadow-md shadow-primary-Neon-Green"
        onClick={fetchAdvice}
      >
        <img
          src={DiceIcon}
          alt="Dice Icon"
          className={`my-auto mx-auto ${loading ? "animate-roll" : ""}`}
        />
      </div>
    </div>
  );
};

export default App;
