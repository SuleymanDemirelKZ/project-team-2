import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import CitySelection from '../../components/Selections/City';
import TestCenterSelection from '../../components/Selections/TestCenter';
import DateSelection from '../../components/Selections/Date';
import TimeSelection from '../../components/Selections/Time';
import PersonalDataForm from '../../components/Forms/PersonalData';
import BookingSummary from '../../components/Summary/Booking';
import { fetchAvailableTimes, postBooking } from '../../services/api/booking';
import { getTestCenters } from '../../services/api/testCenters';
import DateTimeSelection from '../../components/DateTimeSelection';


const Booking = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTestCenter, setSelectedTestCenter] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [personalData, setPersonalData] = useState({});
  const history = useHistory();
  const [availableTimes, setAvailableTimes] = useState('');
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



  
    // useEffect(() => {
    //   const fetchData = async () => {

    //     let specificDate = new Date(2023, 4, 14);
    //     let todaysDate = specificDate.toISOString().split('T')[0];
    //     const times = await fetchAvailableTimes(todaysDate ,selectedTestCenter);
    //     setAvailableTimes(times);
    //   };
  
    //   fetchData();
    // }, [selectedTestCenter]);
  
  

 


  
  


  

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
        <Container>
          <Switch>
            <Route path="/" exact>
              <CitySelection
                cities={['Atyrau', 'Almaty', 'Astana']}
                selectedCity={selectedCity}
                onCityChange={handleCityChange}
              />
              <TestCenterSelection
                testCenters={testCenters}
                selectedTestCenter={selectedTestCenter}
                onTestCenterChange={handleTestCenterChange}
              />

          <Button> Next</Button>
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

              <DateTimeSelection>

              </DateTimeSelection>
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
          
        </Container>
       
      </Box>
    </Router>
  );
};

export default Booking;
