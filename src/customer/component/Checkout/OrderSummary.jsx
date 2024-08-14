import React, { useEffect } from 'react'
import AddressCard from '../AddressCard'
import CartItems from '../Cart/CartItems'
import { Button } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { createPayment } from "../../../State/Payment/Action";
import { createOrder, getOrderById } from '../../../State/Order/Action'
const OrderSummary = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  console.log("orderId from URL:", orderId);


  if (!orderId) {
    console.error("Order ID is missing from the URL");
    // Handle missing order_id, for example, by redirecting or showing an error
  }
  const jwt=localStorage.getItem("jwt");
  const {order}=useSelector(state=>state);


console.log("orderId from oder summary  ", order)

// useEffect(() => {
//   if (orderId) {
//     dispatch(getOrderById(orderId));
//   }
// }, [orderId]);

useEffect(() => {
  if (orderId) {
    dispatch(getOrderById(orderId)).then((response) => {
      console.log("Fetched Order:", response);
    });
  }
}, [orderId]);

const handleCreatePayment=()=>{
  const data={orderId:order.order?._id,jwt}
  dispatch(createPayment(data))
}



  return (
    <div className='mt-10 '>
      <div className='lg:grid grid-cols-3  pt-5 relative'>
    <div className='col-span-2'>
      {order.order?.orderItems.map((item)=>(<>
 <CartItems  item={item} showButton={false} />
 </>
        ))}
    </div>
    <div className='mr-1 sticky top-0 h-[100vh] mt-6 lg:mt-0'>
      <div className='border p-5'>
        <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
        <hr />
        <div className='space-y-3 font-semibold'>
          <div className='flex justify-between pt-3 text-black'>
            <span>Price ({order.order?.totalItem} item) </span>
            <span>&pound; {order.order?.totalPrice}</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Discount</span>
            <span>&pound; {order.order?.discount} </span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Delivery Charges</span>
            <span className='text-green-700'>Free</span>
          </div>
          <div className='flex justify-between pt-3 text-black'>
            <span>Total Amount</span>
            <span>&pound; {order.order?.totalDiscountedPrice}</span>
          </div>
        </div>
        <Button 
         onClick={handleCreatePayment}
         variant='contained'
         className='w-full ' 
         sx={{px:"2rem",py:".7rem",mt:"2rem"
          ,bgcolor:"rgb(239,90,130)"}}>Checkout</Button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default OrderSummary
