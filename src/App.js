import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import MesPotos from "./components/MesPotos";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MesPotos />
    </div>
  );
}

export default App;
