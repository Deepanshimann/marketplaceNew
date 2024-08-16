import React, { useState, useEffect, useCallback } from 'react';
import { Box, Avatar, Toolbar, CssBaseline, Button, Typography } from "@mui/material";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { deepPurple } from "@mui/material/colors";
import { getUser, logout } from "../../State/Auth/Action";
import PopUpModal from '../../customer/SignInUp/PopUpModal';
import Dashboard from "./Dashboard";
import CreateProductForm from "./createproduct/CreateProductForm";
import ProductsTable from "./products/ProductTable";
import OrdersTable from "./ordersTable/OrderTable";
import Customers from "./customers/CustomerTable";
import './Admin.css';
import AdminImage from '/images/adultmoney1.jpg'; // Correct import

export default function Admin() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [isAdminEntered, setIsAdminEntered] = useState(false); // New state to track if admin mode is entered
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const { auth } = useSelector((store) => store);
  const products = []; // Simulating no products. Replace this with your actual products state.
  const orders = [];   // Simulating no orders. Replace this with your actual orders state.
  const customers = []; // Simulating no customers. Replace this with your actual customers state.
  const jwt = localStorage.getItem("jwt");

  const handleOpenAuthModal = useCallback((type) => {
    setModalType(type);
    setOpenAuthModal(true);
    navigate(type === 'login' ? '/loginform' : '/registerform');
  }, [navigate]);

  const handleCloseAuthModal = useCallback(() => {
    setOpenAuthModal(false);
  },[]);

  useEffect(() => {
    if (jwt && !auth.user) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.user, dispatch]);

  useEffect(() => {
    if (auth.user) {
      handleCloseAuthModal();
      if (location.pathname === '/loginform' || location.pathname === '/registerform') {
        navigate('/profile');
      }
    }
  }, [auth.user, handleCloseAuthModal, navigate]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate('/');
  }, [dispatch, navigate]);

  const handleGuidelineClick = () => {
    navigate('/guidelines');
  };

  const handleEnterAdminClick = () => {
    setIsAdminEntered(true); // Set admin mode to entered
  };

  const isNewUser = products.length === 0 && orders.length === 0 && customers.length === 0;

  return (
    <div>
      <CssBaseline />
      <div className="navbar">
        <nav>
          <h1 onClick={() => navigate('/')} className="navbar-title">Vintage Store</h1>
          <div className="nav-links">
            <h4 onClick={() => navigate('/admin/products')}>Products</h4>
            <h4 onClick={() => navigate('/admin/customers')}>Customers</h4>
            <h4 onClick={() => navigate('/admin/orders')}>Orders</h4>
            <h4 onClick={() => navigate('/admin/product/create')}>Add Product</h4>
            <h4 onClick={() => navigate('/contact-us')}>Contact Us</h4>
            <h4 onClick={() => navigate('/help-center')}>Help</h4>
            {auth.user ? (
              <>
                <Avatar
                  className="text-white"
                  onClick={handleLogout}
                  sx={{
                    bgcolor: deepPurple[500],
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {auth.user.firstName[0].toUpperCase()}
                </Avatar>
                <h4 onClick={handleLogout}>Logout</h4>
              </>
            ) : (
              <h4 onClick={() => handleOpenAuthModal('login')}>Sign In</h4>
            )}
          </div>
        </nav>
      </div>
      <PopUpModal handleClose={handleCloseAuthModal} open={openAuthModal} type={modalType} />
      <Box className="adminContainer" component="main" sx={{ flexGrow: 1, p: 3 }}>

        {/* Conditionally Render the New User Section or Admin Dashboard */}
        {isNewUser && !isAdminEntered ? (
          <div className="new-user-container">
    <div className="new-user-content">
        <h4 className="new-user-title">Start Your New Business with Vintage Store</h4>
        <p className="new-user-description">
            Start earning money by adding your own products to Vintage Store. It's easy and fast to set up. Begin your journey as a seller and grow your business with us.
        </p>
        <div className='btn-container'>
        <button className="guideline-button" onClick={handleGuidelineClick}>Read Guidelines</button>
        <button className="enter-admin-button" onClick={handleEnterAdminClick}>Enter Admin Panel</button>
        </div>
    </div>
    <img src={AdminImage} alt="Admin banner" className="new-user-image" />
</div>

) : (
  <Routes>
    <Route path="/" element={<Dashboard className="p-32" />} />
    <Route path="/product/create" element={<CreateProductForm />} />
    <Route path="/products" element={<ProductsTable />} />
    <Route path="/orders" element={<OrdersTable />} />
    <Route path="/customers" element={<Customers />} />
  </Routes>
)}
      </Box>
    </div>
  );
}
