import React from "react";
import Routing from "./Components/Routing";
import "../src/App.css";
import IsLoggedProvider from "./Context/isLoggedContext";

function App() {
  return (
    <IsLoggedProvider>
      <Routing />
    </IsLoggedProvider>
  );
}

export default App;
