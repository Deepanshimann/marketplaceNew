import { Button, TextField, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../State/Auth/Action';

const SignUpForm = ({ setFormType }) => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      phoneNumber: data.get('phoneNumber'),
      role: role,
    };

    console.log('userData', userData);

    try {
      const result = await dispatch(register(userData));
      console.log('Register result:', result); // Log the result to debug
      if (result.success) {
        navigate('/');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Registration error:', error); // Log the error to debug
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Register Here</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='First Name'
              fullWidth
              autoComplete='given-name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='email'
              name='email'
              label='eg. abhi123@gmail.com'
              fullWidth
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              fullWidth
              type='password'
              autoComplete='new-password'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='phoneNumber'
              name='phoneNumber'
              label='Contact Number'
              fullWidth
              autoComplete='tel'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id='role-label'>Role</InputLabel>
              <Select
                labelId='role-label'
                id='role'
                value={role}
                onChange={handleRoleChange}
                label='Role'
              >
                <MenuItem value='customer'>Customer</MenuItem>
                <MenuItem value='admin'>Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              className='bg-[#E75480] w-full'
              type='submit'
              variant='contained'
              size='large'
              sx={{ padding: '.8rem 0' }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>If you already have an account</p>
          <Button onClick={() => setFormType("login")} className='ml-5' size='small'>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
