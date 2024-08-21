import React from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';
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
 import FaqSection from '../customer/component/FAQ/Faq'; // Corrected import statement
import Helpcenter from '../customer/component/FAQ/HelpCenter/Helpcenter';
import ContactUs from '../customer/component/FAQ/HelpCenter/contactUs';
import PaymentSuccess from '../customer/component/Paymentsuccessful/Paymentsuccessful';
import {useSelector } from 'react-redux';
import Loginvedio from '../customer/component/Helpvideos/Loginvedio';
import Productvedio from '../customer/component/Helpvideos/Productvedio';
import Addcartvedio from '../customer/component/Helpvideos/addcartvedio';
import Contactvedio from '../customer/component/Helpvideos/contactvedio';
import HelpSection from '../customer/component/Helpvideos/HelpvideosMain';
const CustomerRoute = () => {
  const location = useLocation();
//   const product=useSelector(store=>store)
//  console.log("..fetching product..",product);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:category/:item' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account/orders' element={<Orderpage />} />
        <Route path='/account/order/:orderId' element={<OrderDetails />} />
        <Route path='/help-center' element={<Helpcenter />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>

        {/* Video Tutorial Routes */}
        <Route path="/login-register-logout-video" element={<Loginvedio />} />
        <Route path="/create-product-video" element={<Productvedio />} />
        <Route path="/manage-cart-video" element={<Addcartvedio />} />
        <Route path="/contact-us-video" element={<Contactvedio />} />
      </Routes>
      <div>
      {location.pathname !== '/help-center' && <FaqSection />}
      <HelpSection/>
        <Footer />
      </div>
    </div>
  );
}

export default CustomerRoute;
