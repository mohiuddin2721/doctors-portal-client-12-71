import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About/About';
import Appointment from './page/Appointment/Appointment';
import Home from './page/Home/Home';
// import Review from './page/Home/Review';
import Login from './page/Login/Login';
import RequireAuth from './page/Login/RequireAuth';
import SignUp from './page/Login/SignUp';
import Navbar from './page/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="reviews" element={<Review />} /> */}
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
