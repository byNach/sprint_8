import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
//import StarshipList from "./Components/StarshipList";
import GetStarship from "./Components/GetApiStarships";

function App() {
  GetStarship();
   return (
    <>
      <Header />
      <Navbar />
      <GetStarship /> 
    </>
  );
}

export default App;
