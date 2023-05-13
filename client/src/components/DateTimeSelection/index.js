import React, { useEffect, useState } from 'react';
import DateSelection from '../Selections/Date';
import TimeSelection from '../Selections/Time';
import BasicDateCalendar from '../Selections/Date';
import { Grid } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { fetchAvailableTimes } from '../../services/api/booking';

const DateTimeSelection = ({onDateChange}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

    

  useEffect(() => {
    let dateOnly = selectedDate.toISOString().split("T")[0];
    fetchAvailableTimes(dateOnly, 1)
  }, [selectedDate]);

  const disablePastDates = (date) => {
    // Return true if the date is before the current date, which will disable it
    return date < new Date();
  };

  return (
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}  // Set to full viewport height
    >
        <Grid item>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                date = {selectedDate}
                onChange = {onDateChange}
                shouldDisableDate={disablePastDates}
            
            />
        </LocalizationProvider>
        </Grid>
      
      </Grid>
   
  );
};

export default DateTimeSelection;
