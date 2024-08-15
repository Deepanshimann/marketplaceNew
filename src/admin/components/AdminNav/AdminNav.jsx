import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../../State/Auth/Action';
import PopUpModal from '../../../customer/SignInUp/PopUpModal';
import MenuIcon from '@mui/icons-material/Menu';  // Import a menu icon
import './AdminNav.css';
import Badge from '@mui/material/Badge';

export default function AdminNav({ onToggleSidebar }) {  // Accept the toggle function as a prop
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [modalType, setModalType] = useState('login');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
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

  return (
    <div className="navbar">
      <nav>
        <MenuIcon onClick={onToggleSidebar} className="menu-icon" />  {/* Icon to toggle the sidebar */}
        <h1 onClick={() => navigate('/')} className="navbar-title">Vintage Store</h1>
        <div className="nav-links">
          <h4 onClick={() => navigate('/contact-us')}>Contact Us</h4>
          <h4 onClick={() => navigate('/help-center')}>Help</h4>
          {auth.user ? (
            <>
              <h4 onClick={() => navigate('/profile')}>{auth.user.firstName}</h4>
              <h4 onClick={handleLogout}>Logout</h4>
            </>
          ) : (
            <h4 onClick={() => handleOpenAuthModal('login')}>Sign In</h4>
          )}
        </div>
      </nav>
      <PopUpModal handleClose={handleCloseAuthModal} open={openAuthModal} type={modalType} />
    </div>
  );
}
