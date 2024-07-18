import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Homepage from '../customer/component/pages/Homepage/Homepage';
import Cart from '../customer/component/Cart/Cart';
import Navbar from '../customer/component/navigation/Navbar';
import Product from '../customer/component/products/Product';
import ProductDetails from '../customer/component/ProductDetails/ProductDetails';
import Footer from '../customer/component/Footer/Footer';

const CustomerRoute = () => {
  return (
  <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
      </div>
  );
}

export default CustomerRoute;
