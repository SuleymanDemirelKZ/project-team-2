import React, { useRef, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';



const Home = () => {
  

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bigger Component
          </Typography>
          <Button color="inherit">
            Section 1
          </Button>
          <Button color="inherit">
            Section 2
          </Button>
          <Button color="inherit" >
            Section 3
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box>
          <ScrollSection  >
            <h2>Section 1</h2>
            {/* Your content for Section 1 */}
          </ScrollSection>
          <ScrollSection  >
            <h2>Section 2</h2>
            {/* Your content for Section 2 */}
          </ScrollSection>
          <ScrollSection>
            <h2>Section 3</h2>
            {/* Your content for Section 3 */}
          </ScrollSection>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
