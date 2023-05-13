import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@material-ui/core';
import { Button } from '@mui/material';





const BookingSummary = ({ bookingDetails, onClickSummary }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Бронь
        </Typography>
        <List>
        <ListItem>
            <Typography variant="body1">Город: {bookingDetails.city}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Тест центр: {bookingDetails.testCenter}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Дата: {bookingDetails.date}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Время: {bookingDetails.time}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Имя: {bookingDetails.personalData.name}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Электронный Почта: {bookingDetails.personalData.email}</Typography>
          </ListItem>
          {/* Add more ListItem components as needed for other booking details */}
        </List>
        <Button onClick={onClickSummary} variant="contained" size="large" style={{ backgroundColor: '#4CAF50', color: 'white', marginTop: '20px' }}>
          Подтвердить
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
