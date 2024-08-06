// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './Routers/CustomerRoute';
import TestConnection from './customer/component/TestConnect';
import AuthModal from './customer/SignInUp/PopUpModal';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/*' element={<CustomerRoute />} />
      </Routes>
      <AuthModal />
    </div>
  );
}

export default App;
