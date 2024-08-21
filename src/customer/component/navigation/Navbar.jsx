import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../../State/Auth/Action';
import PopUpModal from '../../SignInUp/PopUpModal';
import './Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';

// Navigation categories and their dropdown items
const navigation = {
  categories: [
    { id: 'home', name: 'Home', items: [] },
    { id: 'clothing', name: 'Clothing', items: ['Men', 'Women', 'Kids'] },
    { id: 'books', name: 'Books', items: ['Fiction', 'Biographies', 'Spiritual', 'Story Collections'] },
    { id: 'electronics', name: 'Electronics', items: ['Entertainment', 'Computing', 'Personal Gadgets', 'Mobile Devices'] },
    { id: 'furniture', name: 'Furniture', items: ['Living Room', 'Bedroom', 'Dining Room', 'Office'] },
  ],
};

export default function Navbar() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const auth = useSelector(store => store.auth);
  const jwt = localStorage.getItem("jwt");

  //1. Function to close the user menu 
  const handleCloseUserMenu = () => setAnchorEl(null);

  //2. Function to open the authentication modal (login or register)
  const handleOpenAuthModal = useCallback((type) => {
    setModalType(type);   // Set the modal type (login or register)
    setOpenAuthModal(true);

    if (type === 'login') {
      navigate('/loginform');
    } else {
      navigate('/registerform');
    }
  }, [navigate]);

  //3. Function to close the authentication modal
  const handleCloseAuthModal = useCallback(() => {
    setOpenAuthModal(false);
  },[]);

  //a. Effect to fetch user data if JWT token exists but user data is not loaded
  useEffect(() => {
    if (jwt && !auth.user) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.user, dispatch]);

  //b. Effect to close the auth modal and navigate to profile page if user logs in
  useEffect(() => {
    if (auth.user) {
      handleCloseAuthModal();
      if (location.pathname === '/loginform' || location.pathname === '/registerform') {
        navigate('/');
      }
    }
  }, [auth.user, handleCloseAuthModal]);

  const [loggedOut, setLoggedOut] = useState(false);
  //4. Function to handle user logout
  const handleLogout = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate('/');
    setActiveCategory(null); // Close the dropdown if it's open
    setLoggedOut(true); // Trigger a re-render if needed
  }, [dispatch, navigate]);

  //5. Function to handle category click in the navbar
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

  //6. Function to handle item click in dropdowns
  const handleItemClick = useCallback((category, item) => {
    navigate(`/${category}/${item}`);
    setActiveCategory(null); // Close dropdown on item click
  }, [navigate]);

  //7. Function to close the currently active dropdown
  const closeDropdown = () => {
    setActiveCategory(null);
  };

  //8. Function to handle keyboard navigation (Enter or Space keys)
  const handleKeyDown = (e, action) => {
    console.log(`Key pressed: ${e.key}`); // Debugging output
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  //9. Effect to close dropdown when clicking outside of it
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

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchQuery.trim()) {
  //     navigate(`/search?query=${searchQuery}`);
  //     setSearchQuery('');
  //   }
  // };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
        // Convert the search query to lowercase for case-insensitive search
        const query = searchQuery.toLowerCase();

        // Initialize an array to hold search results
        let searchResults = [];

        // Iterate over each category
        navigation.categories.forEach((category) => {
            // Check if the category name matches the search query
            if (category.name.toLowerCase().includes(query)) {
                searchResults.push({ category: category.id, item: null });
            }

            // Check if any items within the category match the search query
            category.items.forEach((item) => {
                if (item.toLowerCase().includes(query)) {
                    searchResults.push({ category: category.id, item });
                }
            });
        });

        // If search results found, navigate to the appropriate page
        if (searchResults.length > 0) {
            // For this example, let's navigate to the first match
            const firstResult = searchResults[0];

            if (firstResult.item) {
                // Navigate to the category and item
                navigate(`/${firstResult.category}/${firstResult.item}`);
            } else {
                // Navigate to just the category
                navigate(`/${firstResult.category}`);
            }
        } else {
            // If no matches found, you can navigate to a "no results" page or show a message
            navigate(`/no-results?query=${searchQuery}`);
        }

        // Clear the search query after search
        setSearchQuery('');
    }
};


  return (
    <div className="navbar">
      <nav>
        <img src="/images/vintagestore.png" alt="logo" />
        <div className="nav-part2">
          {navigation.categories.map((category) => (
            <div className={`nav-elem ${activeCategory === category.id ? 'active' : ''}`} key={category.id}>
              <h4 
              onClick={() => handleCategoryClick(category.id)}
              onKeyDown={(e) => handleKeyDown(e, () => handleCategoryClick(category.id))}
              tabIndex="0"  // Makes it focusable
              role="button"
              aria-expanded={activeCategory === category.id}  // Indicates the dropdown status
              >
                {category.name}</h4>
              {activeCategory === category.id && category.items.length > 0 && (
                <div className="dropdown">
                  {category.items.map((item) => (
                    <h5 
                    key={`${category.id}-${item}`} 
                    onClick={() => handleItemClick(category.id, item)}
                    onKeyDown={(e) => handleKeyDown(e, () => handleItemClick(category.id, item))}
                    tabIndex="0"  // Makes it focusable
                    role="menuitem" // Helps screen readers understand - menu item
                    >
                      <span>{item}</span>
                    </h5>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="search-bar-container">
            <form onSubmit={handleSearch} className="search-bar">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
              />
              <button type="submit" className="search-icon">
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className={`nav-elem ${activeCategory === 'myprofile' ? 'active' : ''}`}>
            <h4 
            onClick={() => handleCategoryClick('myprofile')}
            onKeyDown={(e) => handleKeyDown(e, () => handleCategoryClick('myprofile'))}
            tabIndex="0" 
            role="button" 
            aria-expanded={activeCategory === 'myprofile'}
            >Profile</h4>
            {activeCategory === 'myprofile' && (
              <div className="dropdown">
                {auth.user ? (
                  <>
                   <h5><span onClick={() => { navigate('/help-center'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { navigate('/help-center'); closeDropdown(); })}>Help</span></h5>
                    <h5><span onClick={() => { navigate('/account/orders'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { navigate('/account/orders'); closeDropdown(); })}>My Orders</span></h5>
                    <h5><span onClick={() => { navigate('/contact-us'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { navigate('/contact-us'); closeDropdown(); })}>Contact Us</span></h5>
                    <h5><span onClick={() => { navigate('/admin'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { navigate('/admin'); closeDropdown(); })}>Admin</span></h5>
                    <h5><span onClick={handleLogout} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, handleLogout)}>Logout</span></h5>
                  </>
                ) : (
                  <>
                    <h5><span onClick={() => { handleOpenAuthModal('login'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { handleOpenAuthModal('login'); closeDropdown(); })}>Log In</span></h5>
                    <h5><span onClick={() => { handleOpenAuthModal('register'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { handleOpenAuthModal('register'); closeDropdown(); })}>Register</span></h5>
                    <h5><span onClick={() => { navigate('/contact-us'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { navigate('/contact-us'); closeDropdown(); })}>Contact Us</span></h5>
                    <h5><span onClick={() => { navigate('/help-center'); closeDropdown(); }} tabIndex="0" role="menuitem" onKeyDown={(e) => handleKeyDown(e, () => { navigate('/help-center'); closeDropdown(); })}>Help Center</span></h5>
                  </>
                )}
              </div>
            )}
          </div>
          <div>
            <ShoppingBasketIcon 
            onClick={() => navigate('/cart')} 
            tabIndex="0" 
            role="button" 
            onKeyDown={(e) => handleKeyDown(e, () => navigate('/cart'))}
            />
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
            Log In
          </button>
        )}
        <div className={`nav-bottom ${activeCategory ? 'active' : ''}`}></div>
      </nav>
      <PopUpModal handleClose={handleCloseAuthModal} open={openAuthModal} type={modalType} />
    </div>
  );
}
