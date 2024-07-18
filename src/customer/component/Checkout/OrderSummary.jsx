import React from 'react'
import AddressCard from '../AddressCard'
import CartItems from '../Cart/CartItems'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div className='mt-10 '>
      <div className='p-6 shadow-lg rounded-s-md border'>
      <AddressCard/>
      </div>
      <div className='lg:grid grid-cols-3  pt-5 relative'>
    <div className='col-span-2'>
      {[1,1,1,1].map((item)=><CartItems />)}
    </div>
    <div className='mr-1 sticky top-0 h-[100vh] mt-6 lg:mt-0'>
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
        <Button  variant='contained' className='w-full ' sx={{px:"2rem",py:".7rem",mt:"2rem" ,bgcolor:"rgb(239,90,130)"}}>Checkout</Button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default OrderSummary
