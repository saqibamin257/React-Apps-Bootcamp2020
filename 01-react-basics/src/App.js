import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
  <h1>Hi {props.firstName} {props.lastName}!</h1>
  );
}

export default App;
