import React from "react";
import AddressCard from "../AddressCard";
import { Button, Grid,Box ,TextField} from "@mui/material";
import { useDispatch} from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {createOrder, getOrderById} from '../../../State/Order/Action'
const DeliveryAddress = () => {
 
const dispatch=useDispatch();
const navigate=useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const address = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        streetAddress: data.get("address"),
        city: data.get("city"),
        state: data.get("county"),
        zipCode: data.get("postcode"),
        mobile: data.get("contactNumber"),
        email: data.get("email")
      }

  console.log("address", address);
  const orderData = { address, navigate };
  dispatch(getOrderById(orderData));      

}

  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12}  className=" mt-[5rem] border  rounded-e-md shadow-md h-[30.5rem] ">
          <div className=" p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button sx={{ mt: 3 }} size="large" variant="contained">
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={9}>
  <Box className="mt-[3rem] border rounded-s-md shadow-md p-5">
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Full Address"
            fullWidth
            autoComplete="given-address"
            multiline
            rows={5}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="given-city"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="county"
            name="county"
            label="County"
            fullWidth
            autoComplete="given-state"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="e-mail Address"
            fullWidth
            autoComplete="given-email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postcode"
            name="postcode"
            label="Post Code"
            fullWidth
            autoComplete="given-postcode"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactNumber"
            name="contactNumber"
            label="Contact Number"
            fullWidth
            autoComplete="given-number"
          />
        </Grid>
        <Grid item xs={12} lg={12}>
        <Button onClick={navigate("/checkout?step=3")} className='w-full ' sx={{ mt: 3 }} size="large" variant="contained" type="submit" >
              Deliver Here
            </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
</Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
