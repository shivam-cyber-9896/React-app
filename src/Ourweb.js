import './App.css';

import { Container, Col, Row } from 'react-bootstrap';
import AboutUs from './AboutUs';
import CoursesCarousel from './CourcesCarousel';
import Co from './Co';
import Our from './Our';
import AuthButtons from './AuthButtons';
import Studentreview from './Studentreview';
import Fetch from './Fetch';
const Ourweb=() =>{
    return (
        <div className="App bgdark">
        
        <Container className='bgdark'>
        <Row>
          <Col >
          <CoursesCarousel /> 
           </Col>
           
        </Row>
        <Row>
          <Col>
          <Our />
          </Col>
        </Row>
        <Row>
          
        <Col>
        <h1> About our Courses</h1>
           <Co />
           
          </Col>
        </Row>
        <Row>
          <Col>
          <AboutUs />
          </Col>
        </Row>
        <Row>
        <Col>
           <Studentreview />
           </Col>
        </Row>
        <Row>
          <Col>
          <AuthButtons />
          </Col>
        </Row>    
        </Container>
        <Fetch />
       </div>
    );
}
export default Ourweb;