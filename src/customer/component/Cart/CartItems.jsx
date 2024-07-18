import React from 'react'
import { IconButton,Button } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const CartItems = () => {
  return (
    
      <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
<div className='w-[7rem] h-[7rem] lg:w-[12rem] lg:h-[13rem]'>
<img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/2/l/r/l-6909-blue-libas-original-imafygzxftqzszfx-bb.jpeg?q=70" alt="product image" />
</div>

<div className='ml-5 space-y-1'>
<p className='font-semibold'>Women Anarkali Suit </p>
<p className='opacity-90'>Size:L, Light Blue</p>
<p className='opacity-80 mt-2'>Seller: Kashmiri Silk Store</p>
<div>
<div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>&pound;10</p>
                <p className='opacity-50 line-through'>&pound;20</p>
                <p className='text-green-600 font-semibold'>50%</p>
            </div>
</div>
<div className='lg:flex items-center lg:space-x-10 pt-4'>
<div className='flex items-center space-x-2'>
    <IconButton>
<RemoveCircleIcon sx={{color:"rgb(239,90,130)"}}/>
    </IconButton>
<span className='py-1 px-7 border rounded-sm'>1</span>
    <IconButton > 
<AddCircleIcon sx={{color:"rgb(239,90,130)"}}/>
    </IconButton>   
</div>
<div>
  <Button sx={{color:"rgb(239,90,130)"}}>Remove</Button>  
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default CartItems
