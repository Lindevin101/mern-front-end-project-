import logo from './logo.svg';
import Home from "./screens/Home";
import Drivers from ";./screens/Drivers";
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/" element={<Drivers />} />
     </Routes>
    </div>
  );
}

export default App;
