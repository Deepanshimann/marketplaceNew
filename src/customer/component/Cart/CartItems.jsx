import React from 'react';
import { IconButton, Button } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useDispatch } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItems = ({ item, showButton }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleUpdateCartItem = (num) => {
    const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id, jwt };
    console.log("update data ", data);
    dispatch(updateCartItem(data));
  }

  const handleRemoveClick = () => {
    console.log("Remove button clicked for item: ", item._id);
    dispatch(removeCartItem(item._id, jwt)); // Ensure 'jwt' is available in this context
  };

  return (
    <div className='p-5 mb-6 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[7rem] h-[7rem] lg:w-[12rem] lg:h-[13rem]'>
          <img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl} alt="Product Image" />
        </div>

        <div className='ml-5 space-y-1'>
          <p className='font-semibold text-2xl'>{item?.product?.title}</p>
          <p className='opacity-90 text-2xl'>Size: {item?.size}</p>
          <p className='opacity-80 mt-2 text-2xl'>Seller: {item?.product?.brand}</p>
          <div>
            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
              <p className='font-semibold text-2xl'>&pound;{item?.product?.price}</p>
              <p className='opacity-50 line-through'>&pound;{item?.product?.discountedPrice}</p>
              <p className='text-green-600 font-semibold'>{item?.product?.discountPercent} % Off</p>
            </div>
          </div>

          {/* Conditionally render the buttons */}
          {showButton && (
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
              <div className='flex items-center space-x-2'>
                <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={!item || item.quantity <= 1}>
                  <RemoveCircleIcon sx={{ color: "rgb(239,90,130)" }} />
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>{item?.quantity || 0}</span>
                <IconButton onClick={() => handleUpdateCartItem(1)}>
                  <AddCircleIcon sx={{ color: "rgb(239,90,130)" }} />
                </IconButton>
              </div>
              <div>
                <button onClick={handleRemoveClick}>REMOVE</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItems;
