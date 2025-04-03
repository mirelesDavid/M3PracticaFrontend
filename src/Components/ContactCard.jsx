import React from 'react';
import { CssBaseline, Container, Box, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export function ContactCard({ email }) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: '#FFFFFF', height: '100vh', padding: 3, marginTop: 10 }}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Email: {email}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
  
ContactCard.propTypes = {
  email: PropTypes.string.isRequired
};
  