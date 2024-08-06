import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Menu, MenuItem, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { getUser } from '../../../State/Auth/Action';
import PopUpModal from '../../SignInUp/PopUpModal';
import './Navbar.css';
import useNavAnimation from './useNavAnimation';

const navigation = {
  categories: [
    { id: 'home', name: 'Home', items: [] },
    { id: 'clothing', name: 'Clothing', items: ['Men', 'Women', 'Kids'] },
    { id: 'books', name: 'Printed Media', items: ['Fiction', 'Biographies', 'Spiritual ', 'Story Collections'] },
    { id: 'electronics', name: 'Electronics', items: ['Entertainment', 'Computing', 'Personal Gadgets', 'Mobile Devices'] },
    { id: 'furniture', name: 'Furniture', items: ['Living Room ', 'Bedroom ', 'Dining Room ', 'Office '] },
  ],
};

export default function Navbar() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
  const jwt = localStorage.getItem("jwt");

  const handleUserClick = (event) => setAnchorEl(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorEl(null);
  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser());
    }
  }, [jwt, auth.jwt, dispatch]);

  useEffect(() => {
    if (auth.user) {
      handleCloseAuthModal();
    }
  }, [auth.user]);

  const { toggleCategory } = useNavAnimation(activeCategory, setActiveCategory);

  const handleCategoryClick = (category) => {
    if (category === 'home') {
      navigate('/');
      setActiveCategory(null);
    } else {
      toggleCategory(category);
    }
  };

  const handleItemClick = (category, item) => {
    navigate(`/${category}/${item}`);
    setActiveCategory(null);
  };

  const handleProfileClick = () => {
    navigate("/account/order");
    handleCloseUserMenu();
  };

  return (
    <div className="navbar">
      <nav>
        <h1>Vintage Store</h1>
        <div className="nav-part2">
          {navigation.categories.map(category => (
            <div className={`nav-elem ${activeCategory === category.id ? 'active' : ''}`} key={category.id}>
              <h4 onClick={() => handleCategoryClick(category.id)}>{category.name}</h4>
              {category.items.map(item => (
                <h5 key={item} onClick={() => handleItemClick(category.id, item)}><span>{item}</span></h5>
              ))}
            </div>
          ))}
          <div className="nav-elem">
            <h4 onClick={() => toggleCategory('myprofile')}>My Profile</h4>
            <h5><span onClick={handleOpenAuthModal}>Profile</span></h5>
            <h5><span onClick={handleProfileClick}>My Orders</span></h5>
            <h5><span onClick={handleCloseUserMenu}>Logout</span></h5>
          </div>
        </div>
        <button onClick={handleOpenAuthModal}>Sign In</button>
        <div className={`nav-bottom ${activeCategory ? 'active' : ''}`}></div>
      </nav>
      <PopUpModal handleClose={handleCloseAuthModal} open={openAuthModal} />
    </div>
  );
}
