import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const TestCenterSelection = ({ testCenters, selectedTestCenter, onTestCenterChange }) => {
  return (
    <TextField
      select
      label="Test Center"
      value={selectedTestCenter}
      onChange={onTestCenterChange}
      variant="outlined"
    >
      {testCenters.map((testCenter) => (
        <MenuItem key={testCenter.id} value={testCenter.id}>
          {testCenter.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default TestCenterSelection;
