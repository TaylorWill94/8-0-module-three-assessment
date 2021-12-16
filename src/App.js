import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='people' element={<People />} />
        <Route path='locations' element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;