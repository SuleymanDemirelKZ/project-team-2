import React from 'react';
import { Typography } from '@mui/material';
import AppointmentList from '../../containers/AppointmentList';

const Appointments = () => {
  return (
    <div className="container mx-auto mt-8">
      <Typography variant="h4" className="text-2xl mb-4">
        Appointments
      </Typography>
      <AppointmentList />
    </div>
  );
};

export default Appointments;
