import Home from "./screens/Home";
import Drivers from "./screens/Drivers";
import Nav from "./components/Nav.jsx";
import DriverCreate from "./screens/DriverCreate.jsx";
import {Routes, Route} from "react-router-dom";
import './App.css';
import React from "react";
function App() {
  return (
    <div className="App">
     
      <Nav />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/add-driver" element={<DriverCreate/>} />
     </Routes>
    </div>
  );
}

export default App;
