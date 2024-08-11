import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../../State/Auth/Action';
import PopUpModal from '../../SignInUp/PopUpModal';
import './Navbar.css';
// import useNavAnimation from './useNavAnimation';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';

const navigation = {
  categories: [
    { id: 'home', name: 'Home', items: [] },
    { id: 'clothing', name: 'Clothing', items: ['Men', 'Women', 'Kids'] },
    { id: 'books', name: 'Printed Media', items: ['Fiction', 'Biographies', 'Spiritual', 'Story Collections'] },
    { id: 'electronics', name: 'Electronics', items: ['Entertainment', 'Computing', 'Personal Gadgets', 'Mobile Devices'] },
    { id: 'furniture', name: 'Furniture', items: ['Living Room', 'Bedroom', 'Dining Room', 'Office'] },
  ],
};

export default function Navbar() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
//  console.log("abc....."+auth.user);
  const jwt = localStorage.getItem("jwt");

  const handleCloseUserMenu = () => setAnchorEl(null);

  const handleOpenAuthModal = useCallback((type) => {
    setModalType(type);
    setOpenAuthModal(true);

    if (type === 'login') {
      navigate('/loginform');
    } else {
      navigate('/registerform');
    }
  }, []);

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
  }, [auth.user, handleCloseAuthModal]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate('/');
  }, [dispatch, navigate]);

  // const { toggleCategory } = useNavAnimation(activeCategory, setActiveCategory);

  const handleCategoryClick = useCallback((category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Close dropdown if already active
    } else {
      setActiveCategory(category); // Open the selected category
    }

    if (category === 'home') {
      navigate('/');
    } else if (category !== 'myprofile') {
      navigate( { replace: true });
    }
  }, [navigate, activeCategory]);

  const handleItemClick = useCallback((category, item) => {
    navigate(`/${category}/${item}`);
    setActiveCategory(null); // Close dropdown on item click
  }, [navigate]);

  const closeDropdown = () => {
    setActiveCategory(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-elem')) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <nav>
        <h1>Vintage Store</h1>
        <div className="nav-part2">
          {navigation.categories.map((category) => (
            <div className={`nav-elem ${activeCategory === category.id ? 'active' : ''}`} key={category.id}>
              <h4 onClick={() => handleCategoryClick(category.id)}>{category.name}</h4>
              {activeCategory === category.id && category.items.length > 0 && (
                <div className="dropdown">
                  {category.items.map((item) => (
                    <h5 key={`${category.id}-${item}`} onClick={() => handleItemClick(category.id, item)}>
                      <span>{item}</span>
                    </h5>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={`nav-elem ${activeCategory === 'myprofile' ? 'active' : ''}`}>
            <h4 onClick={() => handleCategoryClick('myprofile')}>My Profile</h4>
            {activeCategory === 'myprofile' && (
              <div className="dropdown">
                {auth.user ? (
                  <>
                    <h5><span onClick={() => { navigate('/help-center'); closeDropdown(); }}>Help</span></h5>
                    <h5><span onClick={() => { navigate('/account/orders'); closeDropdown(); }}>My Orders</span></h5>
                    <h5><span onClick={() => { navigate('/contact-us'); closeDropdown(); }}>Contact Us</span></h5>
                    <h5><span onClick={handleLogout}>Logout</span></h5>
                  </>
                ) : (
                  <>
                    <h5><span onClick={() => { handleOpenAuthModal('login'); closeDropdown(); }}>Sign In</span></h5>
                    <h5><span onClick={() => { handleOpenAuthModal('register'); closeDropdown(); }}>Register</span></h5>
                    <h5><span onClick={() => { navigate('/contact-us'); closeDropdown(); }}>Contact Us</span></h5>
                    <h5><span onClick={() => { navigate('/help-center'); closeDropdown(); }}>Help Center</span></h5>
                  </>
                )}
              </div>
            )}
          </div>
          <div>
            <ShoppingBasketIcon onClick={() => navigate('/cart')} />
            <Badge className='badge' badgeContent={1} color="warning">
            </Badge>
          </div>
        </div>

        {auth.user ? (
          <button onClick={() => navigate('/profile')}>
            {auth.user.firstName}
          </button>
        ) : (
          <button onClick={() => handleOpenAuthModal('login')}>
            Sign In
          </button>
        )}
        <div className={`nav-bottom ${activeCategory ? 'active' : ''}`}></div>
      </nav>
      <PopUpModal handleClose={handleCloseAuthModal} open={openAuthModal} type={modalType} />
    </div>
  );
}
