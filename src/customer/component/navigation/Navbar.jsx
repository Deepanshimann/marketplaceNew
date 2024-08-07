import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../../State/Auth/Action';
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
  const [modalType, setModalType] = useState('login');
  const [setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
  const jwt = localStorage.getItem("jwt");

  const handleCloseUserMenu = () => setAnchorEl(null);
  const handleOpenAuthModal = (type) => {
    setModalType(type);
    setOpenAuthModal(true);


    if (type === 'login') {
      navigate('/loginform');
    } else {
      navigate('/registerform');
    }
  };
  const handleCloseAuthModal = () => {
    setOpenAuthModal(false);
    navigate('/');
  };

  useEffect(() => {
    if (jwt && !auth.user) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.user, dispatch]);


  // useEffect(() => {
  //   if (auth.user) {
  //     handleCloseAuthModal();
  //     navigate('/profile');
  //   }
  // }, [auth.user, handleCloseAuthModal, navigate]);
  useEffect(() => {
    if (auth.user) {
      handleCloseAuthModal();
      if (location.pathname === '/loginform' || location.pathname === '/registerform') {
        navigate('/profile');
      }
    }
  }, [auth.user, handleCloseAuthModal, navigate, location.pathname]);
  


  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate('/');
  };

  const { toggleCategory } = useNavAnimation(activeCategory, setActiveCategory);

  const handleCategoryClick = (category) => {
    if (category === 'home') {
      navigate('/');
      setActiveCategory(null);
    } else {
      toggleCategory(category);
      setActiveCategory(category); // Ensure activeCategory state is updated
    }
  };
  
  const handleItemClick = (category, item) => {
    navigate(`/${category}/${item}`);
    setActiveCategory(null); // Close category menu after clicking an item
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
            <h5><span onClick={() => handleOpenAuthModal('register')}>Help</span></h5>
            <h5><span onClick={() => navigate('/account/order')}>My Orders</span></h5>
            <h5><span onClick={handleLogout}>Logout</span></h5>
          </div>
        </div>
        {auth.user ? (
          <button onClick={() => navigate('/profile')}>
            {auth.user.firstName}
          </button>
        ) : (
          <button onClick={() => handleOpenAuthModal('login')}>Sign In</button>
        )}
        <div className={`nav-bottom ${activeCategory ? 'active' : ''}`}></div>
      </nav>
      <PopUpModal handleClose={handleCloseAuthModal} open={openAuthModal} type={modalType} />
    </div>
  );
}
