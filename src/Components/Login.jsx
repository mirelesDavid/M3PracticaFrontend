import React, { useState } from 'react';
import { CssBaseline, Container, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    console.log('Login attempt with:', { email, password });
    if (email.length > 0 && password.length > 0){
      setIsLoading(true);
      
      // Store email in localStorage
      localStorage.setItem('userEmail', email);
      console.log('Stored email in localStorage:', email);
      
      // Force a storage event to notify other components
      window.dispatchEvent(new Event('storage'));
      
      console.log('Attempting to navigate to /mainpage');
      
      // Small timeout to ensure state updates
      setTimeout(() => {
        navigate('/mainpage');
        setIsLoading(false);
      }, 100);
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
            <Button 
              variant="outlined" 
              fullWidth 
              sx={{ mt: 2 }} 
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}