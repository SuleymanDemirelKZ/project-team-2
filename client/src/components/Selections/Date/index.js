import React from 'react';
import { TextField } from '@mui/material';

const DateSelection = ({ selectedDate, onDateChange }) => {
  return (
    <TextField
      label="Date"
      type="date"
      value={selectedDate}
      onChange={onDateChange}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DateSelection;
