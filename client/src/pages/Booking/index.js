import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import CitySelection from '../../components/Selections/City';
import TestCenterSelection from '../../components/Selections/TestCenter';
import DateSelection from '../../components/Selections/Date';
import TimeSelection from '../../components/Selections/Time';
import PersonalDataForm from '../../components/Forms/PersonalData';
import BookingSummary from '../../components/Summary/Booking';
import { fetchAvailableTimes } from '../../services/api/booking';


const Booking = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTestCenter, setSelectedTestCenter] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [personalData, setPersonalData] = useState({});
  const history = useHistory();
  const [availableTimes, setAvailableTimes] = useState('');
  
  const handleCityChange = (e) => setSelectedCity(e.target.value);
  const handleTestCenterChange = (e) => setSelectedTestCenter(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);
  const handlePersonalDataSubmit = (data) => {
    setPersonalData(data);
    history.push('/summary');
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const times = await fetchAvailableTimes();
      setAvailableTimes(times);
    };

    fetchData();
  }, []);

  


  

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
          </Toolbar>
        </AppBar>
        <Container>
          {console.log(fetchAvailableTimes())}
          <Switch>
            <Route path="/" exact>
              <CitySelection
                cities={['Atyrau', 'Almaty', 'Astana']}
                selectedCity={selectedCity}
                onCityChange={handleCityChange}
              />
              <TestCenterSelection
                testCenters={[
                  { id: 1, name: 'Test Center 1' },
                  { id: 2, name: 'Test Center 2' },
                ]}
                selectedTestCenter={selectedTestCenter}
                onTestCenterChange={handleTestCenterChange}
              />
            </Route>
            <Route path="/date-time">
              <DateSelection
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
              />
              <TimeSelection
                availableTimes={availableTimes}
                selectedTime={selectedTime}
                onTimeChange={handleTimeChange}
              />
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
