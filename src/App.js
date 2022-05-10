import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About/About';
import Home from './page/Home/Home';
import Navbar from './page/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
