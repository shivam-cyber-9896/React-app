import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const AuthButtons = () => {
  const buttonStyle = {
    backgroundColor: 'black',
    color: 'orange',
    border: '2px solid orange',
    padding: '12px 28px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '8px',
    transition: '0.3s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const hoverEffect = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.background = 'linear-gradient(90deg, orange, #ff6600)';
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.boxShadow = '0px 0px 20px rgba(255, 165, 0, 0.9)';
      e.currentTarget.style.transform = 'scale(1.1)';
    } else {
      e.currentTarget.style.background = 'black';
      e.currentTarget.style.color = 'orange';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    }
  };

  return (
    <Container className="text-center my-5">
      <h1 className="fw-bold text-white mb-4">
        <span className="text-warning"> Welcome to SoftTech Infoways</span>
      </h1>
      <Row className="justify-content-center">
        <Col md={3} className="mb-3">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
              style={buttonStyle}
              onMouseEnter={(e) => hoverEffect(e, true)}
              onMouseLeave={(e) => hoverEffect(e, false)}
            >
              Login
            </Button>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button
              style={buttonStyle}
              onMouseEnter={(e) => hoverEffect(e, true)}
              onMouseLeave={(e) => hoverEffect(e, false)}
            >
              Signup
            </Button>
          </Link>
        </Col>
      </Row>
      <Row><div className="text-center my-4">
               
               </div>
     </Row>
      
    </Container>
    
  );
};

export default AuthButtons;
