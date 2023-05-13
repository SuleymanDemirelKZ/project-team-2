import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import { useHistory } from 'react-router-dom';



const TimeSelection = ({times, onTimeSlotChange}) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const history = useHistory()


  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };
  const handleNextClick = () => {
    console.log('Next button clicked, selected time is:', selectedTime);
    onTimeSlotChange(selectedTime)
     history.push("/personal-data")
  };

  return (
    <Box>
      {times.map((timeSlot, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => handleTimeClick(timeSlot)}
          disabled={timeSlot.booked}
          style={{ 
            backgroundColor: selectedTime === timeSlot ? 'blue' 
                            : timeSlot.booked ? 'gray' : 'green' 
          }}
        >
          {timeSlot.time}
        </Button>
      ))}
      <Button
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
