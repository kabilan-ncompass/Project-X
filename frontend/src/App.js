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
    <div class="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard/:username" element={<DashBoard />}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
