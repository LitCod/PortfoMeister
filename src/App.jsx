import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './Home/HomePage';
import './App.css';
import Login from './login/Login';
import Register from './register/Register';
//import TemplateCollect from './template/TemplateCollection';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
}

export default App;
