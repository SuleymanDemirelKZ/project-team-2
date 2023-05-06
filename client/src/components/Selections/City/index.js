import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const CitySelection = ({ cities, selectedCity, onCityChange }) => {
  return (
    <TextField
      select
      label="City"
      value={selectedCity}
      onChange={onCityChange}
      variant="outlined"
    >
      {cities.map((city) => (
        <MenuItem key={city} value={city}>
          {city}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CitySelection;
