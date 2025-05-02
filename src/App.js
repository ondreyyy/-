import './App.css';
import About from  './pages/about'
import Home from  './pages/home'
import { Routes, Route } from "react-router"
import "./utilities/scroll"
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
  );
}

export default App;
