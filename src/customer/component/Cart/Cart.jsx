import React, { useEffect } from 'react';
import CartItems from './CartItems';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
import EmptyCartImage from '../../../../public/images/emptycart.jpg'; // replace with your actual image path
import './Cart.css'
const Cart = () => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector(store => store);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  }

  useEffect(() => {
    if (jwt) {
      dispatch(getCart(jwt));
    }
  }, [jwt, cart.updateCartItem, dispatch]);

  const handleSignIn = () => {
    navigate("/login");
  }

  const isUserLoggedIn = Boolean(jwt);
  const hasCartItems = cart.cartItems.length > 0;

  return (
    <div className="pt-32 mb-12">
      {isUserLoggedIn ? (
        hasCartItems ? (
          <div className="lg:grid grid-cols-3 lg:px-16 relative">
            <div className="lg:col-span-2 lg:px-5 bg-white">
              <div className="space-y-3">
                {cart.cartItems.map((item) => (
                  <CartItems key={item.id} item={item} showButton={true} />
                ))}
              </div>
            </div>
            <div className='sticky top-0 h-[100vh] mt-5 lg:mt-0'>
              <div className='border p-5'>
                <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                <hr />
                <div className='space-y-3 font-semibold'>
                  <div className='flex justify-between pt-3 text-black'>
                    <span>Price of ({cart.cart?.totalItem} items)</span>
                    <span>&pound; {cart.cart?.totalPrice}</span>
                  </div>
                  <div className='flex justify-between pt-3 text-black'>
                    <span>Discount</span>
                    <span>&pound; {cart.cart?.discount}</span>
                  </div>
                  <div className='flex justify-between pt-3 text-black'>
                    <span>Delivery Charges</span>
                    <span className='text-green-700'>Free</span>
                  </div>
                  <div className='flex justify-between pt-3 text-black'>
                    <span>Total Amount</span>
                    <span>&pound; {cart.cart?.totalDiscountedPrice}</span>
                  </div>
                </div>
                <Button 
                  onClick={handleCheckout} 
                  type="submit" 
                  variant='contained' 
                  className='w-full' 
                  sx={{ px: "2rem", py: ".7rem", mt: "2rem", bgcolor: "rgb(239,90,130)" }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center mb-44">
            <img src={EmptyCartImage} alt="Empty Cart" className="w-1/2 mb-8" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-lg  mb-5">Add items to your cart to see them here.</p>
            <button 
              onClick={() => navigate('/')} 
              variant='contained' 
              className='emptycartbutton' 
            >
              Continue Shopping
            </button>
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center  mb-44">
          <img src={EmptyCartImage} alt="Empty Cart" className="w-1/2 mb-8" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty right now</h2>
          <p className="text-lg mb-5">Sign in to add items to your cart.</p>
          <button 
           className='emptycartbutton' 
            onClick={handleSignIn} 
            variant='contained' 
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
