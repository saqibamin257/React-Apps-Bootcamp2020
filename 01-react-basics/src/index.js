import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaCard from './MediaCard';
import Gate from './Gate';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App firstName={"saqib"} lastName={"amin"} />



    <MediaCard media={{
                       title:"Great China Wall!", 
                       body:"This is wonder of the world!",
                       imageUrl:"https://image.cnbcfm.com/api/v1/image/102013848-china-great-wall.jpg?v=1532564419&w=678&h=381" 
                      }}
                      />
                      
  <Gate isOpen={false}/>
  
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
