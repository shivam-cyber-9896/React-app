import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Student from './student';
import { Container, Col } from "react-bootstrap";
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Top from './Top';
import { Row } from 'react-bootstrap';

function App() {
  const Address=[
    {
    "Hno":173,
    "Area":"Dwarkapuri",
    "pincode":125055
   },
   {
    "Hno":30,
    "Area":"Bansal Colony"
   }
  
  ]
  return (

    <div className="App bgdark">
      <Container><Row>
        <Col xs={12} md={6}>
        <Top />
        </Col>
      </Row>
      <Row>

      </Row>
      <Row>
        <Col xs={12} md={6}>
      
        </Col>
      </Row>
      </Container>
      
    </div>
     /*<div   >
      
       <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
        
                  <Student name="Rohit"  city="Sirsa" addr={Address[0]} />
                <br/>
                  <Student name="Pankaj"  city="Delhi" addr={Address[1]}  />
    
   
    </div>

  /*const [first,setFirst]=useState(20)
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
    </div>*/
  );
}

export default App;

