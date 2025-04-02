import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaFacebook, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-sm">
              &copy; {new Date().getFullYear()} SoftTech Infoways. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4 mx-3">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="mx-2 fs-5 text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="mx-2 fs-5 text-white" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


