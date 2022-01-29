import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import Message from './pages/message/Message';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message />} />   
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
