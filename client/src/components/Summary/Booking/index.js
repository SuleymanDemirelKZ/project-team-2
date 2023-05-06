import React from 'react';
import { Typography, Box } from '@mui/material';

const BookingSummary = ({ bookingData }) => {
  return (
    <Box>
      <Typography variant="h4">Booking Summary</Typography>
      <Typography>City: {bookingData.city}</Typography>
      <Typography>Test Center: {bookingData.testCenter}</Typography>
      <Typography>Date: {bookingData.date}</Typography>
      <Typography>Time: {bookingData.time}</Typography>
      <Typography>Name: {bookingData.personalData.name}</Typography>
      <Typography>Email: {bookingData.personalData.email}</Typography>
      {/* Add more fields as needed */}
    </Box>
  );
};

export default BookingSummary;
