import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [first,setFirst]=useState(20)
  const [second,setSecond]=useState(40)
  const [total,setTotal]=useState(0)
  const [flag,setFlag]=useState(true)
  function shownew()
  {
     setTotal(first+second)
  }
  function toggle()
  {
    setFlag(!flag)
  }
  console.log("component render")
  return (
    <div className="backred">
   <h1>Total sum is :{total}</h1>
   {
    flag?"flag is true":"flag is false"
   }
   <h1>hello react</h1>
  
   
   <button onClick={()=>shownew()}>show</button>
   <button onClick={toggle}>Change status</button>
    </div>
  );
}

export default App;

