
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../State/Auth/Action";
import {  useEffect, useState } from "react";

export default function RegisterUserForm() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [openSnackBar,setOpenSnackBar]=useState(false);
  const { auth } = useSelector((store) => store);
  const handleClose=()=>setOpenSnackBar(false);

  const jwt=localStorage.getItem("jwt");

useEffect(()=>{
  if(jwt){
    dispatch(getUser(jwt))
  }
},[dispatch, jwt])





  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true)
  }, [auth.error, auth.user]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const userData={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
phoneNumber:data.get("phoneNumber"),

    }
    console.log("user data",userData);
    
    dispatch(register(userData),navigate)
  
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
      <h1 className="text-3xl mb-6 font-bold text-[#212B3A]">SignUp Here!</h1>
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
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="phoneNumber"
              fullWidth
              autoComplete="given-number"
              type="phoneNumber"
            />
          </Grid>
          <Grid item xs={12}>
            <button
               className="inline-block bg-teal-400 text-black font-bold  text-xl py-2 px-4 rounded-full no-underline hover:bg-teal-500 transition w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Register
            </button>
          </Grid>
        </Grid>
      </form>

<div className="flex justify-center flex-col items-center">
     <div className="py-3 flex items-center ">
        <p className="m-0 p-0 text-lg">if you already have an account ?</p>
        <Button onClick={()=> navigate("/loginform")} className="ml-5" size="large">
          Login
        </Button>
      </div>
</div>

<Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>
     
    </div>
  );
}
