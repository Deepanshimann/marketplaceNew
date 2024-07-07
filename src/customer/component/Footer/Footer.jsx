import React from 'react';
import { Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Grid 
        container 
        sx={{ bgcolor: "black", color: "white", py: 3 }} 
        className="text-center mt-10"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">Company </Typography>
          <Typography variant="h6" className="pb-5">About </Typography>
          <Typography variant="h6" className="pb-5">Contact Us </Typography>
          <Typography variant="h6" className="pb-5">Career </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">Marketing </Typography>
          <Typography variant="h6" className="pb-5">About </Typography>
          <Typography variant="h6" className="pb-5">Contact Us </Typography>
          <Typography variant="h6" className="pb-5">API Status </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">Company </Typography>
          <Typography variant="h6" className="pb-5">Claim </Typography>
          <Typography variant="h6" className="pb-5">Contact Us </Typography>
          <Typography variant="h6" className="pb-5">Terms</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">Company </Typography>
          <Typography variant="h6" className="pb-5">About </Typography>
          <Typography variant="h6" className="pb-5">Contact Us </Typography>
          <Typography variant="h6" className="pb-5">Career </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
