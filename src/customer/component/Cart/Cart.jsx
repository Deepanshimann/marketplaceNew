import React, { useEffect } from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
import { useSelector } from 'react-redux';

const Cart = () => {
  const navigate=useNavigate();
  const jwt = localStorage.getItem("jwt");
  const {cart}=useSelector(store=>store)
  const dispatch=useDispatch();

const handleCheckout=()=>{
  navigate("/checkout?step=2");
}

useEffect(()=>{
  dispatch(getCart(jwt));
}, [jwt,cart.updateCartItem]);

  return (
    <div className="pt-32 mb-12">
       {cart.cartItems.length>0 && <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          {cart.cartItems.map((item) => (
            <>
              <CartItems item={item} showButton={true}/>
            </>
          ))}
        </div>
      </div>
    <div className=' sticky top-0 h-[100vh] mt-5 lg:mt-0'>
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
        <Button onClick={handleCheckout} type="submit" variant='contained' className='w-full ' sx={{px:"2rem",py:".7rem",mt:"2rem" ,bgcolor:"rgb(239,90,130)"}}>Checkout</Button>
      </div>
    </div>
  </div>}
  </div>
  )
}

export default Cart
