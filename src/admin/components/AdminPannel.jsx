
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import AdminNav from './AdminNav/AdminNav';

function AdminPannel() {
  return (
    <div className="App">
        <AdminNav/>
     <Admin/>
    </div>
  );
}

export default AdminPannel;
