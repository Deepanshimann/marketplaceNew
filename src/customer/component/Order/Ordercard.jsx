import React from 'react';
import Grid from '@mui/material/Grid';
import AdjustIcon from '@mui/icons-material/Adjust';
const Ordercard = () => {
  return (
    <div className='p-5 shadow-md hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img 
              className="w-[7rem] h-[7rem] object-cover object-top" 
              src="https://tse4.mm.bing.net/th/id/OIP.LviMFRNqcw_vvzj9wJjVBgHaMV?rs=1&pid=ImgDetMain" 
              alt="product image" 
            />
            <div className="ml-5 space-y-2">
              <p className=''>Women Slim Mid Rise Black Jeans</p>
              <p className='opacity-50 text-xs font-semibold'>Size: M</p>
              <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
      <p> &pound;199</p>
        </Grid>

<Grid item xs={4}>
<p>
    <span>
    <AdjustIcon className='text-green-400'/>  Delivered on March 3
    </span>
</p>

<p>
    <span>
     <AdjustIcon className='text-orange-400'/>  Expected Delivered on March 9
    </span>
</p>
<p>
    <span>
     <AdjustIcon className='text-red-600'/>  Order Cancelled on March 9
    </span>
</p>

<p>
    <span>
     <AdjustIcon className='text-blue-600'/>  Order returned on March 9
    </span>
</p>
</Grid>

      </Grid>
    </div>
  )
}

export default Ordercard;
