import React, { useState } from 'react';
import { CssBaseline, Container, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt with:', { email, password });
    if (email.length > 0 && password.length > 0){
      localStorage.setItem('userEmail', email);
      console.log('Stored email in localStorage:', email);
      console.log('Attempting to navigate to /mainpage');
      navigate('/mainpage');
    } else {
      console.log('Login failed: Missing credentials');
      alert("Missing Password or Email");
    }
  };
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#FFFFFF', height: '100vh', padding: 3, marginTop: 30 }}>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}