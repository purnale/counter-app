import React, { useState } from 'react' ;
import './Counter.css';
function Counter (){
const [Counter , setCounter]= useState(0);
const [initialCount, setInitialCount] =useState(0);
const handleInitialCountChange = (event) =>{
    setInitialCount(event.target.value);
};
  const handleReset = () => {
    setCounter(initialCount);
};
  return (
    <div className='Counter-Container'>
        <button onClick={() => setCounter (Counter + 1)}>Increment</button>
        <button onClick={() => setCounter (Counter - 1)}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <p>Count: {Counter}</p>
    </div>
   );
  }

export default Counter;