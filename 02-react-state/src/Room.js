import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Room() {
 const [isLit,setLit]= useState(true);

  return (
    <div className="App">
     the room is {isLit ? 'lit':'dark'}
    </div>
  );
}

export default Room;
