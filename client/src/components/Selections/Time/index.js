import React, { useState } from 'react';
import { Button } from '@mui/material';
import { green, grey } from '@mui/material/colors';



const TimeSelection = ({times, onTimeChange}) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const selectTime = (time) => {
    if (!time.isBooked) {
      setSelectedTime(time.time);
      // Do something with the selected time
    }
  };

  return (
    <div>
          {console.log(times,"Times in moment ")}
      {times.map((timeObj) => (
        <Button 
          key={timeObj.time} 
          onClick={() => selectTime(timeObj)}
          style={{
            backgroundColor: timeObj.isBooked ? grey[500] : green[500] ,
            color: 'white',
            marginRight: '10px',
            marginBottom: '10px',
          }}
          disabled={timeObj.isBooked}
        >
          {timeObj.time}
        </Button>
      ))}
      {selectedTime && <p>Selected time: {selectedTime}</p>}
    </div>
  );
};

export default TimeSelection;
