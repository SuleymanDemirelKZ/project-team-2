// src/components/Footer/index.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#1976d2',
    padding: '16px 0',
  },
  text: {
    color: '#ffffff',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography align="center" className={classes.text}>
        &copy; {new Date().getFullYear()} Driving License Booking App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
