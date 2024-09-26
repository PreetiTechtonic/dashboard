import logo from './logo.svg';
import './App.css';
import './Dashboardcontent.css';
import './components/Home.css';
import './components/Sidebar.css';
import Dashboard from './Admin/Dashboard';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Transaction from './Admin/Transaction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
