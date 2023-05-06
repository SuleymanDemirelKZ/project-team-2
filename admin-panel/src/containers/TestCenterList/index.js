import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const TestCenterList = ({ testCenters }) => {
  const history = useHistory();

  const handleButtonClick = (testCenterId) => {
    history.push(`/test-center/${testCenterId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Number of Appointments</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testCenters.map((testCenter) => (
            <TableRow key={testCenter.id}>
              <TableCell>{testCenter.name}</TableCell>
              <TableCell>{testCenter.appointments.length}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleButtonClick(testCenter.id)}>
                  View Test Center
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestCenterList;
