import React from "react";
import AddressCard from "../AddressCard";
import { Button, Grid, Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';

const DeliveryAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth } = useSelector(store => store);


  const handleDeliverHereClick = (address) => {
    // Trigger the order creation with the selected address
    const orderData = { address, jwt:auth.token };
    dispatch(createOrder({...orderData,navigate}));      
    console.log("Delivering to address: ", address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      street: data.get("address"),
      city: data.get("city"),
      county: data.get("county"),
      postcode: data.get("postcode"),
    };

    console.log("address", address);
    const orderData = { address,jwt:auth.token };
    dispatch(createOrder({...orderData,navigate}));
    console.log("adress from delivryform ", orderData);
  };

  return (
    <div className="mb-32">
      <Grid container spacing={4}>
        <Grid xs={12} lg={3} className="mt-[5rem] border rounded-e-md shadow-md min-h-[30.5rem]">
          <div className="p-5 py-7 border-b cursor-pointer flex flex-col">
            {auth.user?.addresses.map((item, index) => (
              <Box key={index} mb={4}>
                <AddressCard address={item} mobile={auth.user?.phoneNumber} />
                <Button 
                onClick={() => handleDeliverHereClick(item)} 
                 variant='contained'
                 type="submit"
                 sx={{px:"2rem",
                 color:"black",
                 fontWeight:"bold",
                  py:".5rem",
                  mt:"1rem",
                   fontSize:"1rem",
                    bgcolor:"#2DD4BF",
                      borderRadius: "9999px", // Fully rounded button
          '&:hover': {
            bgcolor: "#22B8A1", // Darker shade for hover
          },
          }}>Deliver Here</Button>
              </Box>
            ))}
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
                <Grid item xs={12} lg={12}>
                <Button 
         variant='contained'
         className='w-full ' 
         type="submit" 
         sx={{px:"2rem",
          color:"black",
          fontWeight:"bold",
          py:".6rem",
          mt:"2rem",
          fontSize:"1.2rem",
          bgcolor:"#2DD4BF",
          borderRadius: "9999px", // Fully rounded button
          '&:hover': {
            bgcolor: "#22B8A1", // Darker shade for hover
          },
          }}>Deliver Here</Button>
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
