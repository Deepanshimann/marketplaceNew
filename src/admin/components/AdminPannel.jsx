
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import FaqSection from '../../customer/component/FAQ/Faq'; 
import Footer from '../../customer/component/Footer/Footer';

function AdminPannel() {
  return (
    <div className="App">
     <Admin/>
     <FaqSection />
     <Footer/>
    </div>
  );
}

export default AdminPannel;
