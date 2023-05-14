import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import { useHistory } from 'react-router-dom';



const TimeSelection = ({times, onTimeSlotChange}) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const history = useHistory()


  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

    const handleBackClick = () =>
    {
      history.push("/booking")
    }

  const handleNextClick = () => {
    console.log('Next button clicked, selected time is:', selectedTime);
    onTimeSlotChange(selectedTime)
     history.push("/personal-data")
  };

  return (
    <Box gap={2} sx={{ 
      boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)', 
      borderRadius: '10px',
      backgroundColor: '#fff'
    }}>
      <Grid spacing={2}>

      
      {times.map((timeSlot, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => handleTimeClick(timeSlot)}
          disabled={timeSlot.booked}
          style={{ 
            margin: "10px",
            backgroundColor: selectedTime === timeSlot ? 'gray' 
                            : timeSlot.booked ? 'gray' : '#3E6FF4' 
          }}
        >
          {timeSlot.time.substring(0, 5)}
        </Button>
      ))}
      </Grid>
      
      <Button 
        variant="contained"
        onClick={handleBackClick}
        
      >
        Назад
      </Button>
      <Button sx = {{margin: "0 50px"}}
        variant="contained"
        onClick={handleNextClick}
        disabled={!selectedTime}
      >
        Дальше
      </Button>
   
     
      
    </Box>

  );
};

export default TimeSelection;
