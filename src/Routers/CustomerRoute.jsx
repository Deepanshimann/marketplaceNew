import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Homepage from '../customer/component/pages/Homepage/Homepage';
import Cart from '../customer/component/Cart/Cart';
import Navbar from '../customer/component/navigation/Navbar';
import Product from '../customer/component/products/Product';
import ProductDetails from '../customer/component/ProductDetails/ProductDetails';
import Footer from '../customer/component/Footer/Footer';
import Checkout from '../customer/component/Checkout/Checkout';
import OrderDetails from '../customer/component/Order/OrderDetails';
import Orderpage from '../customer/component/Order/Orderpage';
import FrontPage from '../customer/component/front-page/FrontPage';

const CustomerRoute = () => {
  return (
  <div>
      <div>
        <Navbar />
        <FrontPage/>
      </div>
      <Routes>
      <Route path='/login' element={<Homepage />}></Route>
      <Route path='/register' element={<Homepage />}></Route>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/account/order' element={<Orderpage/>} />
        <Route path='/account/order/:orderId' element={<OrderDetails/>} />
      </Routes>
      <div>
        <Footer />
      </div>
      </div>
  );
}

export default CustomerRoute;
