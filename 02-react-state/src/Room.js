import React, {useState} from 'react';
import './index.css';


function Room() {
 const [isLit,setLit]= useState(true);
 const [temp,setTemp] = useState(22);
 
 const brightness =isLit ? "Lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
     the room is {isLit ? 'lit':'dark'}
     <br/>
     the room temperature is :{temp} celcius!
     <br/>
     <button onClick = {() => setLit(!isLit)}> flip </button>
     <br/>
     <button onClick= { () => setTemp(temp+1) } > + </button>
     <button onClick= { () => setTemp(temp-1)  }> - </button>
    </div>
  );
}

export default Room;
