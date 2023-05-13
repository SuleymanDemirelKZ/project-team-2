import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import CitySelection from '../../components/Selections/City';
import TestCenterSelection from '../../components/Selections/TestCenter';
import DateSelection from '../../components/Selections/Date';
import TimeSelection from '../../components/Selections/Time';
import PersonalDataForm from '../../components/Forms/PersonalData';
import BookingSummary from '../../components/Summary/Booking';
import { fetchAvailableTimes, postBooking } from '../../services/api/booking';
import { getTestCenters } from '../../services/api/testCenters';
import DateTimeSelection from '../../components/DateTimeSelection';


const DateTestTimeSlotsWrapper = ({date, testCenter}) => 
{


  const [selectedDate, setSelectedDate] = useState(date)
  const [timeSlots, setTimeSlots] = useState('')
  // const [selectedTime, setSelectedTime] = useState(null)
  useEffect(() => 
  {   
    const fetchData = async () =>
    {
      if(testCenter)
      {
        const testCenterId = testCenter.id
        let dateOnly = selectedDate.toISOString().split("T")[0];
        let timeSlots =  await fetchAvailableTimes(dateOnly, testCenterId)
        setTimeSlots(timeSlots)  
      }
    }
   fetchData();
  }, [selectedDate])
  
  const handleDateChange = (newValue) =>
  {
    setSelectedDate(newValue);
  }

  // const handleTimeChange = (time) =>{
  //   setSelectedTime(time)
  // }
  return (
    <div>
      <DateTimeSelection onDateChange = {handleDateChange}/>
       <TimeSelection times = {timeSlots}  />
    </div>
  
  )
}



const Booking = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTestCenter, setSelectedTestCenter] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [personalData, setPersonalData] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);
  const [testCenters, setTestCenters] = useState([])
  const handleCityChange = (e) => setSelectedCity(e.target.value);
  const handleTestCenterChange = (e) => setSelectedTestCenter(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);
  const handlePersonalDataSubmit =  async (data) => {
    
    setPersonalData(data);
    const bookingData={
      city: selectedCity,
      testCenter: selectedTestCenter,
      date: selectedDate,
      time: selectedTime,
      personalData,
    }

    await postBooking(bookingData)
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
              {/* <DateSelection
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
              />
              <TimeSelection
                availableTimes={availableTimes}
                selectedTime={selectedTime}
                onTimeChange={handleTimeChange}
              /> */}
            <Grid item>
              
              <DateTestTimeSlotsWrapper  date = {new Date()} testCenter={testCenters[selectedTestCenter-1]}>

              </DateTestTimeSlotsWrapper>
          
                </Grid>
            </Route>
            <Route path="/personal-data">
              <PersonalDataForm onSubmit={handlePersonalDataSubmit} />
            </Route>
            <Route path="/summary">
              
              <BookingSummary
                bookingData={{
                  city: selectedCity,
                  testCenter: selectedTestCenter,
                  date: selectedDate,
                  time: selectedTime,
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
