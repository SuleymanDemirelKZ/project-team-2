import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

import { useHistory } from 'react-router-dom';

const PersonalDataForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Add more fields as needed
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    history.push('/summary')
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        {/* Add more fields as needed */}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default PersonalDataForm;
