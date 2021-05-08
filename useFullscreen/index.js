import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import useFullscreen from "./useFullscreen";

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          alt="ntr"
          ref={element}
          style={({ height: 500 }, { width: 450 })}
          src="https://pbs.twimg.com/media/DxxBxFlX4AETMGq.jpg"
        />
        <button onClick={exitFull}>exit</button>
      </div>

      <button onClick={triggerFull}>Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
