import React, {useState} from 'react';
import './index.css';


function Room() {
 
 const [isOn,setSwitch]=useState(true);
 

  return (
    <div >     
     the switch is {isOn ? 'On': 'Off'}
     <br/>
    
     <button onClick={() => setSwitch(true) } >On</button>
     <button onClick={() => setSwitch(false) } >Off</button>

    </div>
  );
}

export default Room;
