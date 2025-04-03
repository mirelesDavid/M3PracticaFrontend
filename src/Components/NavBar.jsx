import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export function NavBar(){
    const navigate = useNavigate();

    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              M7 Practica
            </Typography>
            <Button color="inherit" onClick={() => navigate('/mainpage')}>Home</Button>
            <Button color="inherit"  onClick={() => navigate('/contact', { state: { email: localStorage.getItem('userEmail') } })}>Contact</Button>
            <Button color="inherit" onClick={() => {navigate('/'),  localStorage.clear(); }}>LogOut</Button>
          </Toolbar>
        </AppBar>
      );
}