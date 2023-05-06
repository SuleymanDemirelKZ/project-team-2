// src/pages/Home/index.js

import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to the Driving License Booking App
      </Typography>
      <Typography>
        Use the navigation menu to browse users, test centers, and appointments.
      </Typography>
    </div>
  );
};

export default Home;
