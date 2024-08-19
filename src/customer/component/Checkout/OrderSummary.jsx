import React, { useEffect, useState } from 'react';
import AddressCard from '../AddressCard';
import CartItems from '../Cart/CartItems';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createPayment } from "../../../State/Payment/Action";
import { createOrder, getOrderById } from '../../../State/Order/Action';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51PpJQtRsZlg6HjHGVcJF5RxjsPr4D3FVcPWyjagzqOI4EdMYBsty1Gt9YQo8o1z2JDIPFMbwBHYO1yoDNhHOSP0E00VnU7yCqS'); // Replace with your public Stripe key

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('order_id');
  const jwt = localStorage.getItem('jwt');
  const { order } = useSelector((state) => state);

  // State to hold the clientSecret
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId)).then((response) => {
        console.log('Fetched Order:', response);
      });
    }
  }, [orderId]);

  const handleCreatePayment = async () => {
    const data = { orderId: order.order?._id, jwt };
    const paymentIntentData = await dispatch(createPayment(data));

    if (paymentIntentData && paymentIntentData.clientSecret) {
      // Set the clientSecret to the state
      setClientSecret(paymentIntentData.clientSecret);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="mt-10">
        <div className="lg:grid grid-cols-3 pt-5 relative">
          <div className="col-span-2 pr-6">
            {order.order?.orderItems.map((item) => (
              <CartItems item={item} showButton={false} key={item._id} />
            ))}
          </div>
          <div className="mr-1 sticky top-0 h-[100vh] mt-6 lg:mt-0">
            <div className="border p-5">
              <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span className="text-xl">Price ({order.order?.totalItem} item)</span>
                  <span className="text-xl">&pound; {order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span className="text-xl">Discount</span>
                  <span className="text-xl">&pound; {order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span className="text-xl">Delivery Charges</span>
                  <span className="text-teal-500 text-xl">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span className="text-xl">Total Amount</span>
                  <span className="text-xl">&pound; {order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                onClick={handleCreatePayment}
                variant="contained"
                className="w-full"
                sx={{
                  px: '2rem',
                  color: 'black',
                  fontWeight: 'bold',
                  py: '.6rem',
                  mt: '2rem',
                  fontSize: '1.2rem',
                  bgcolor: '#2DD4BF',
                  borderRadius: '9999px',
                  '&:hover': {
                    bgcolor: '#22B8A1',
                  },
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        {clientSecret && <CheckoutForm clientSecret={clientSecret} />}
      </div>
    </Elements>
  );
};

export default OrderSummary;
