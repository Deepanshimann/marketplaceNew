// src/App.jsx
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './Routers/CustomerRoute';
// import TestConnection from './customer/component/TestConnect';
import AuthModal from './customer/SignInUp/PopUpModal';
import ProfileRoute from './Routers/ProfileRoute'
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/*' element={<CustomerRoute />} />
        <Route path='/profile' element={<ProfileRoute />} />
        <Route path='/login' element={<CustomerRoute />} />
        <Route path='/register' element={<CustomerRoute />} />
      </Routes>
      <AuthModal />
    </div>
  );
}

export default App;
