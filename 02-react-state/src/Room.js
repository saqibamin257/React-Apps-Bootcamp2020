import React from 'react';
import logo from './logo.svg';
import './App.css';

function Room() {
 const [isLit,setLit]= React.useState(true);

  return (
    <div className="App">
     The Room is lit
    </div>
  );
}

export default Room;
