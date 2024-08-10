import * as React from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../State/Auth/Action";
import { useEffect } from "react";
import { useState } from "react";


export default function LoginUserForm() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const [openSnackBar,setOpenSnackBar]=useState(false);
  const { auth } = useSelector((store) => store);
  const handleCloseSnakbar=()=>setOpenSnackBar(false);
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
    
    const userData={
      email: data.get("email"),
      password: data.get("password"),
     
    }
    console.log("login user",userData);
  
    dispatch(login({userData,navigate}));

  };

  return (
    <React.Fragment>
      <form className="w-full" onSubmit={handleSubmit}>
        <h1 className="text-3xl mb-6 font-bold text-[#212B3A]">LogIn Here!</h1>
        <Grid container spacing={3}>
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

          <Grid item xs={12}>
            <button
              className="inline-block bg-teal-400 text-black font-bold  text-xl py-2 px-4 rounded-full no-underline hover:bg-teal-500 transition w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Login
            </button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
         <div className="py-3 flex items-center">
        <p className="m-0 p-0 text-lg">don't have an account ?</p>
        <Button  onClick={()=> navigate("/registerform")} className="ml-5" size="large">
          Register
        </Button>
        </div>
      </div>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
