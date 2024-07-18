import React from 'react'
import {Stepper,Step,StepLabel} from '@mui/material';

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full  h-[6.5rem] border shadow-md'>
      <Stepper className='mt-6' activeStep={activeStep} alternativeLabel>
       {steps.map((label)=><Step>
        <StepLabel  sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
       </Step>)} 
      </Stepper>
    </div>
  )
}

export default OrderTracker
