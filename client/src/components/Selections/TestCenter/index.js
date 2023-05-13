import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const TestCenterSelection = ({ testCenters, selectedTestCenter, onTestCenterChange }) => {
  return (
    <TextField
      select
      label="Выбирай Тестовый Центр"
      value={selectedTestCenter}
      placeholder='Выбирай Тестовый Центр'
      onChange={onTestCenterChange}
      variant="outlined"
      sx={{ width: '250px' }}
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
