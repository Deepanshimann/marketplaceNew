import React from 'react'
import { IconButton,Button } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useDispatch } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItems = ({item,showButton}) => {
  const dispatch=useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?._id, jwt}
    console.log("update data ",data)
    dispatch(updateCartItem(data))
  }
  const handleRemoveCartItem = () => {
    const jwt = localStorage.getItem("jwt"); // Get JWT token here
    dispatch(removeCartItem(item._id, jwt)); // Pass the jwt token along with the item ID
  };
  
  return (
    
      <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
<div className='w-[7rem] h-[7rem] lg:w-[12rem] lg:h-[13rem]'>
<img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl} alt="Product Image"/>
</div>

<div className='ml-5 space-y-1'>
<p className='font-semibold'>{item?.product?.title}</p>
<p className='opacity-90'>Size:{item?.size}</p>
<p className='opacity-80 mt-2'>Seller: {item?.product?.brand}</p>
<div>
<div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>&pound;{item?.product?.price}</p>
                <p className='opacity-50 line-through'>&pound;{item?.product?.discountedPrice}</p>
                <p className='text-green-600 font-semibold'>{item?.product?.discountPercent}</p>
            </div>
</div>
<div className='lg:flex items-center lg:space-x-10 pt-4'>
<div className='flex items-center space-x-2'>
    <IconButton onClick={()=>handleUpdateCartItem(-1)}  disabled={!item || item.quantity <= 1}>
<RemoveCircleIcon sx={{color:"rgb(239,90,130)"}}/>
    </IconButton>
<span className='py-1 px-7 border rounded-sm'>{item?.quantity || 0}</span>
    <IconButton onClick={()=>handleUpdateCartItem(1)} > 
<AddCircleIcon sx={{color:"rgb(239,90,130)"}}/>
    </IconButton>   
</div>
<div>
  <Button onClick={handleRemoveCartItem}>Remove</Button>  
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default CartItems
