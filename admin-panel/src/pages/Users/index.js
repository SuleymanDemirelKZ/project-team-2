// src/pages/Users/index.js

import React from 'react';
import { Typography } from '@mui/material';
import UserList from '../../containers/UserList';

const Users = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <UserList />
    </div>
  );
};

export default Users;
