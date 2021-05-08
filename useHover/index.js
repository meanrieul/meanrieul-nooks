import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import useHover from "./useHover";

const App = () => {
  const sayHello = () => console.log("hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
