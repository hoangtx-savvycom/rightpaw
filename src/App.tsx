import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListUsers from './features/listUsers/ListUsers';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <ListUsers />
    </Container>
  );
}

export default App;
