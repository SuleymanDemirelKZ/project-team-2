// TestCenterPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import AppointmentList from '../../../containers/AppointmentList';
import { getTestCenters } from '../../../services/api/testCenters';

const TestCenter = ({ testCenter }) => {


  if (!testCenter) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {testCenter.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Appointments
      </Typography>
        <AppointmentList appointments = {testCenter.appointments}/>
    </div>
  );
};

export default TestCenter;
