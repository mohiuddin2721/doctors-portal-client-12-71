import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About/About';
import Appointment from './page/Appointment/Appointment';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Navbar from './page/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
