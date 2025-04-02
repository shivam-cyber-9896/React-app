import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f8f9fa';
  }, [darkMode]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    
    // Admin authentication
    if (role === 'Admin' && email === 'shivam@admin.com' && password === '9896') {
      setError('');
      navigate('/admin'); // Redirect to Admin Page after login
    } else if (role === 'Admin') {
      setError('Invalid Admin credentials.');
    } else {
      setError('');
      alert(`Logged in as ${role}`);
    }
  };

  const handleGoogleLogin = () => {
    alert('Google login feature coming soon...');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={12} className="shadow-lg p-5 rounded" style={{ backgroundColor: darkMode ? '#1a1a1a' : '#fff', color: darkMode ? '#fff' : '#000' }}>
          <h2 className="text-center mb-4">Login</h2>

          <div className="text-end mb-3">
            <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Button>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Role</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)} style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
                <option>User</option>
                <option>Admin</option>
                <option>Guest</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>

            <Button variant="danger" className="w-100 mt-3 d-flex align-items-center justify-content-center" onClick={handleGoogleLogin}>
              <FaGoogle className="me-2" /> Login with Google
            </Button>

            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-primary fw-bold">Sign Up</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
