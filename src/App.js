import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <a
          href="https://github.com/ElenTara/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
