import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const CitySelection = ({ cities, selectedCity, onCityChange }) => {
  return (
    <TextField
      select
      label="Выбирай город"
      value={selectedCity}
      placeholder='Выбирай город'
      onChange={onCityChange}
      variant="outlined"
      sx={{ width: '250px' }}

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
