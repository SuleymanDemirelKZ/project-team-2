// src/containers/UserList/index.js

import React, { useState, useEffect } from 'react';
import { getUsers } from '../../services/api/users';
import { Typography } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <Typography key={user.id}>{user.fullName}</Typography>
      ))}
    </div>
  );
};

export default UserList;
