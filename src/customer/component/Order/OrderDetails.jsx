import React from 'react';
import AddressCard from '../AddressCard';
import OrderTracker from './OrderTracker';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StarRateIcon from '@mui/icons-material/StarRate';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard />
      </div>
      <div className='py-10'>
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
        {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: 'space-between' }}>
          <Grid item xs={6}>
            <div className='flex items-center space-x-5'>
              <img className='w-[7rem] h-[7rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l0mr7gw0/ethnic-set/e/r/w/m-palazoo-set-kenix-world-original-imagcdtgpszm7cdy.jpeg?q=70" alt="product image" />
              <div className='space-y-2 ml-5'>
                <p className='font-semibold' >Women Beautiful Suit</p>
                <p className='space-x-5 opacity-80 text-sm'><span>Colour: Purple</span> <span>Size: M</span></p>
                <p>Seller: Linara</p>
                <p>&pound;199</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
              <StarRateIcon sx={{ fontSize: "2.2rem" }} className='px-2' />
              <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
       
      </Grid>
    </div>
  );
}

export default OrderDetails;
