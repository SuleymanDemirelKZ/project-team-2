import React, { useState } from 'react';
import { Button } from '@mui/material';
import { green, grey } from '@mui/material/colors';

const times = [
  { time: "00:00", isBooked: false },
  { time: "01:00", isBooked: true },
  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },
  { time: "00:00", isBooked: false },
  { time: "01:00", isBooked: true },
  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },
  { time: "00:00", isBooked: false },
  { time: "01:00", isBooked: true },
  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },
  { time: "00:00", isBooked: false },
  { time: "01:00", isBooked: true },
  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  { time: "01:00", isBooked: true },

  // ...and so on up to "23:00"
];

const TimeSelection = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const selectTime = (time) => {
    if (!time.isBooked) {
      setSelectedTime(time.time);
      // Do something with the selected time
    }
  };

  return (
    <div>
      {times.map((timeObj) => (
        <Button 
          key={timeObj.time} 
          onClick={() => selectTime(timeObj)}
          style={{
            backgroundColor: timeObj.isBooked ? green[500] : grey[500],
            color: 'white',
            marginRight: '10px',
            marginBottom: '10px',
          }}
          disabled={!timeObj.isBooked}
        >
          {timeObj.time}
        </Button>
      ))}
      {selectedTime && <p>Selected time: {selectedTime}</p>}
    </div>
  );
};

export default TimeSelection;
