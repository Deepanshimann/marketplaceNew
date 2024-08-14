// src/App.jsx
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './Routers/CustomerRoute';
// import TestConnection from './customer/component/TestConnect';
import AuthModal from './customer/SignInUp/PopUpModal';
import ProfileRoute from './Routers/ProfileRoute'
import {AdminRoutes} from './Routers/AdminRoutes';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/*' element={<CustomerRoute />} />
        <Route path='/admin/*' element={<AdminRoutes/>}></Route>
      </Routes>
      <AuthModal />
    </div>
  );
}

export default App;
