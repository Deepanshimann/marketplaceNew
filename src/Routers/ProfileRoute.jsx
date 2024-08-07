// import React from 'react';
import { useSelector } from 'react-redux';
import CustomerRoute from './CustomerRoute';

const Profile = () => {
  const auth = useSelector((store) => store.auth);

  return (
    <div>
      <CustomerRoute/>
      {auth.user ? (
        <div>
          <p>Name: {auth.user.firstName} {auth.user.lastName}</p>
          <p>Email: {auth.user.email}</p>
          <p>Phone Number: {auth.user.phoneNumber}</p>
          <p>Role: {auth.user.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
