// UserModal.js
import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const UserModal = ({ user, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6">User ID: {user.id}</Typography>
        {/* Render other user data here */}
      </Box>
    </Modal>
  );
};

export default UserModal;
