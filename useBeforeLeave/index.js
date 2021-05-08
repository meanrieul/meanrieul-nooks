import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import useBeforeLeave from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
