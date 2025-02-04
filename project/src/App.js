// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import ForgotPassword from './components/forgotpass/forgotpass';
import Login from './components/login/Login';
import DisasterReliefApp from './components/homepg/homepage';
import Navbar from './components/homepage/Navbar/Navbar';

function App() {
  return (
  
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/homepage" element={<DisasterReliefApp/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/forgotpass" element={<ForgotPassword/>} />
        <Route path="/" element={<Login/>} />
        {/* Add more routes for other pages */}
      </Routes>
   
  );
}

export default App;
