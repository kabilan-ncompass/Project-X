import './App.css';
import DashBoard from './components/DashBoard';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate
} from "react-router-dom";
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  let access_token = localStorage.getItem("access_token")

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </div>
  );
}

export default App;
