import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './Routers/CustomerRoute';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<CustomerRoute />} />
    </Routes>
  );
}

export default App;
