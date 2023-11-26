import logo from './logo.svg';
import Home from "./screens/Home";
import Drivers from ";./screens/Drivers";
import Nav from "./screens/Nav.jsx";
import DriverSubmissions from "./screens/DriverSubmissions.jsx";
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/drivers" element={<Drivers />} />
      <Route path ="/add-driver" element={<DriverSubmissions/>} />
     </Routes>
    </div>
  );
}

export default App;
