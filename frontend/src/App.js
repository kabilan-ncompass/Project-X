import DashBoard from './components/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

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
