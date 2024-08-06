// src/components/TestConnection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';

const TestConnection = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const testApiConnection = async () => {
      try {
        console.log(`Testing connection to ${API_BASE_URL}/test`);
        const response = await axios.get(`${API_BASE_URL}/test`);
        setMessage(response.data.message);
      } catch (error) {
        setError('Failed to connect to the backend.');
      }
    };

    testApiConnection();
  }, []);

  return (
    <div>
      {message ? (
        <p>{message}</p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default TestConnection;
