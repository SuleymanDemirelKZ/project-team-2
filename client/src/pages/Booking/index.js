import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import CitySelection from '../../components/Selections/City';
import TestCenterSelection from '../../components/Selections/TestCenter';
import DateSelection from '../../components/Selections/Date';
import TimeSelection from '../../components/Selections/Time';
import PersonalDataForm from '../../components/Forms/PersonalData';
import BookingSummary from '../../components/Summary/Booking';
import { createBooking, fetchAvailableTimes } from '../../services/api/booking';
import { getTestCenters } from '../../services/api/testCenters';
import DateTimeSelection from '../../components/DateTimeSelection';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';





const Booking = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTestCenter, setSelectedTestCenter] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [personalData, setPersonalData] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({})
  const [timeSlots, setTimeSlots] = useState([])
  const [testCenters, setTestCenters] = useState([])
  const handleCityChange = (e) => setSelectedCity(e.target.value);
  const handleTestCenterChange = (e) => setSelectedTestCenter(e.target.value);
  const handleDateChange = (date) => setSelectedDate(date);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);
  const handleTimeSlotConfig = (ts) => setSelectedTimeSlot(ts)

  const disablePastDates = (date) => {
    // Return true if the date is before the current date, which will disable it
    return date < new Date();
  };
  const handlePersonalDataSubmit =  async (data) => {
    
    await setPersonalData(data);



    const bookingData={
      timeSlotId: selectedTimeSlot.id,
      name: personalData.name,
      email: personalData.email
    }
    
    await createBooking(bookingData)
  };
  
  useEffect (() => 
  {
    const fetchData = async() =>
     {
      const testCenters = await getTestCenters();
      setTestCenters(testCenters)
     }
    
     fetchData()
     
  }, [])


  useEffect(() => 
  {   
    const fetchData = async () =>
    {
      if(selectedTestCenter && selectedDate)
      {
        const testCenterId = testCenters[selectedTestCenter-1].id
        let dateOnly = selectedDate.toISOString().split("T")[0];
        let timeSlots =  await fetchAvailableTimes(dateOnly, testCenterId)
        setTimeSlots(timeSlots)  
      }
    }
   fetchData();
  }, [selectedTestCenter, selectedDate])




  

  


  

  return (
    <Router>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Booking
            </Typography>
            <Button color="inherit" component={Link} to="/">
              City & Test Center
            </Button>
            <Button color="inherit" component={Link} to="/date-time">
              Date-Time
            </Button>
            <Button color="inherit" component={Link} to="/personal-data">
              Personal Data
            </Button>
            <Button color="inherit" component={Link} to="/summary">
              Summary
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3} 
      style={{ minHeight: '100vh' }}  // Set to full viewport height
    >
          <Switch>
            <Route path="/" exact>
            <Grid item>
              <CitySelection
                cities={['Atyrau', 'Almaty', 'Astana']}
                selectedCity={selectedCity}
                onCityChange={handleCityChange}
              />
              </Grid>
              <Grid item>
              <TestCenterSelection
                testCenters={testCenters}
                selectedTestCenter={selectedTestCenter}
                onTestCenterChange={handleTestCenterChange}
              />
            </Grid>
           <Button>Дальше</Button>
            </Route>
            <Route path="/date-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                date = {selectedDate}
                onChange = {handleDateChange}
                shouldDisableDate={disablePastDates}
               />
              </LocalizationProvider> 
              <TimeSelection
                times={timeSlots}
                selectedTime={selectedTime}
                onTimeSlotChange={handleTimeSlotConfig}
              />
            <Grid item>
            
          
                </Grid>
            </Route>
            <Route path="/personal-data">
              <PersonalDataForm onSubmit={handlePersonalDataSubmit} />
            </Route>
            <Route path="/summary">
              
              <BookingSummary
                bookingData={{
                  city: selectedCity,
                  testCenter:  testCenters.name ?   testCenters[selectedTestCenter-1].name : 'TestCenter' ,
                  date: selectedDate.toISOString().split('T')[0],
                  time: selectedTimeSlot.time,
                  personalData,
                }}
              />
            </Route>
          </Switch>
          
          </Grid>
       
      </Box>
    </Router>
  );
};

export default Booking;
