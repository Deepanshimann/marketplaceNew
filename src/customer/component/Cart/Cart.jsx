import React from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate();
const handleCheckout=()=>{
  navigate("/checkout?step=2");
}
  return (
    <div className='lg:grid grid-cols-3 lg:px-16 p-5 relative'>
    <div className='col-span-2'>
      {[1,1,1,1].map((item)=><CartItems />)}
    </div>
    <div className=' sticky top-0 h-[100vh] mt-5 lg:mt-0'>
      <div className='border p-5'>
        <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
        <hr />
        <div className='space-y-3 font-semibold'>
          <div className='flex justify-between pt-3 text-black'>
            <span>Price</span>
            <span>₹4697</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Discount</span>
            <span>₹1234</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Delivery Charges</span>
            <span className='text-green-700'>Free</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Total Amount</span>
            <span>₹12697</span>
          </div>
        </div>
        <Button onClick={handleCheckout} variant='contained' className='w-full ' sx={{px:"2rem",py:".7rem",mt:"2rem" ,bgcolor:"rgb(239,90,130)"}}>Checkout</Button>
      </div>
    </div>
  </div>
  
  )
}

export default Cart
