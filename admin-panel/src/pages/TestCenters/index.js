// src/pages/TestCenters/index.js

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import TestCenterList from '../../containers/TestCenterList';
import { getTestCenters } from '../../services/api/testCenters';

const TestCenters = () => {
    const [testCenters, setTestCenters] = useState([]);

    useEffect(() => {
        const fetchTestCenters = async () => {
          try {
            const data = await getTestCenters();
            setTestCenters(data);
            console.log(testCenters, 'mytests')
          } catch (error) {
            console.error('Error fetching test centers:', error);
          }
        };
    
        fetchTestCenters();
      }, []);


  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Test Centers
      </Typography>
      <TestCenterList testCenters = {testCenters}  />
    </div>
  );
};

export default TestCenters;
