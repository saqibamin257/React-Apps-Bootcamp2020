import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App({firstName,lastName}) {
//   return (
//   <h1>Hi {firstName} {lastName}!</h1>
//   );
// }

const App = ({firstName,lastName}) => (    
    <h1>Hello {firstName} {lastName}!</h1>    
)
export default App;
