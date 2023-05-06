import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AppointmentList = ({ appointments }) => {
    const getStatusColor = (status) => {
        switch (status) {
          case 'SCHEDULED':
            return 'green';
          case 'CANCELED':
            return 'red';
          case 'COMPLETED':
          default:
            return 'blue';
        }
      };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.id}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.userId}</TableCell>
              <TableCell>
                <span style={{ color: getStatusColor(appointment.appointmentStatus) }}>
                  {appointment.appointmentStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentList;
