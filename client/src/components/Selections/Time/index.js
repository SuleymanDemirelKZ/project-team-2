import React, { useState } from "react";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { useHistory } from "react-router-dom";

const TimeSelection = ({ times, onTimeSlotChange }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleBackClick = () => {
    history.push("/booking");
  };

  const handleNextClick = () => {
    console.log("Next button clicked, selected time is:", selectedTime);
    onTimeSlotChange(selectedTime);
    history.push("/personal-data");
  };

  return (
    <Box
      gap={2}
      sx={{
        boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Grid spacing={2} sx ={{ margin : isMobile ? "" : "20px 40px" }}>
        {times.map((timeSlot, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleTimeClick(timeSlot)}
            disabled={timeSlot.booked}
            style={{
              margin: "10px",
              backgroundColor:
                selectedTime === timeSlot
                  ? "gray"
                  : timeSlot.booked
                  ? "gray"
                  : "#3E6FF4",
            }}
          >
            {timeSlot.time.substring(0, 5)}
          </Button>
        ))}
      </Grid>

      <Box sx={{ margin : isMobile ? "20px 30px" : "20px 40px"   }}>
        <Button
          variant="contained"
          onClick={handleBackClick}
          sx={{ width: "200px" }}
        >
          Назад
        </Button>
        <Button
          sx={{ margin: isMobile ? "20px 0 " :  "0 20px", width: "200px" }}
          variant="contained"
          onClick={handleNextClick}
          disabled={!selectedTime}
        >
          Дальше
        </Button>
      </Box>
    </Box>
  );
};

export default TimeSelection;
