import DashBoard from './components/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {

  const [access_token,setAccesstoken] = useState(localStorage.getItem('access_token'))

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setAccesstoken={setAccesstoken} />}/>
        <Route path="/dashboard"  element={access_token ? <DashBoard /> : <Navigate to='/' />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </div>
  );
}

export default App;
