import React, { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Top = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.querySelector('.navbar').style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #ff0000, #8b0000)`; // Red Effect
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Navbar expand="lg" className="navbar navbar-light sticky-top shadow-sm py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase text-black">
          SoftTech Infoways
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['Courses', 'Features', 'Pricing', 'Contact Us'].map((item, index) => (
              <Nav.Link key={index} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-black mx-2">
                {item}
              </Nav.Link>
            ))}
            <Nav.Link as={Link} to="/about" className="text-black mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-black mx-2">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="btn btn-dark text-white mx-2">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;