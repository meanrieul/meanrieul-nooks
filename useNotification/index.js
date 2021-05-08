import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import useNotification from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Can I steal your Kimchi?", {
    body: "I love Kimchi. don't you?",
    icon: "https://pbs.twimg.com/media/DxxBxFlX4AETMGq.jpg",
    silent: true,
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
