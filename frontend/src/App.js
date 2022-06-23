import './App.css';
import DashBoard from './components/DashBoard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dashboard/:username" element={<DashBoard />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
