import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const imgStyle = {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginTop: '15px',
  };

  return (
    <Container className="my-5">
      {/* Introduction Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold">About <span className="text-primary">SoftTech Infoways</span></h1>
          <p className="lead">
            Empowering learners with industry-ready skills through expert-led courses in programming, web development, and full-stack technologies.
            With <strong>20+ years of experience</strong> in tech education, we have trained thousands of students worldwide.
          </p>
        </Col>
      </Row>

      {/* Mission & Vision Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-lg border-0 p-4 h-100">
            <Card.Body>
              <h3 className="text-primary">Our Mission</h3>
              <p>
                Our mission is to provide high-quality, practical, and job-oriented training that helps individuals and businesses stay ahead in the tech world.
                We focus on hands-on learning, real-world projects, and career-oriented education.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg border-0 p-4 h-100">
            <Card.Body>
              <h3 className="text-primary">Our Vision</h3>
              <p>
                We envision a world where technology education is accessible to all, enabling students and professionals to build innovative solutions.
                Our goal is to create a strong community of developers who can make a difference in the digital era.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="text-center mb-5">
        <Col>
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p className="text-muted">
            Our team of experts has been in the tech industry for over 20 years, working with Fortune 500 companies, startups, and global enterprises.
            We bring real-world experience into the classroom, ensuring that our students are job-ready from day one.
          </p>
        </Col>
      </Row>

      {/* Our Team Section */}
      <Row className="text-center mb-5">
        <Col>
          <h2 className="fw-bold">Meet Our Team</h2>
          <p className="text-muted">A team of experienced educators and industry professionals dedicated to your success.</p>
        </Col>
      </Row>
      
      <Row className="gy-4">
        {[
          { name: 'Amithab Doe', role: 'Founder & CEO', experience: '20+ years in AI, cloud computing, and enterprise solutions.', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
          { name: 'Rohit Smith', role: 'Lead Instructor', experience: '18+ years of teaching full-stack development.', img: 'https://randomuser.me/api/portraits/women/50.jpg' },
          { name: 'Michael Johnson', role: 'Senior Developer', experience: '15+ years in JavaScript, React, and backend technologies.', img: 'https://randomuser.me/api/portraits/men/55.jpg' },
          { name: 'Emily Carter', role: 'UI/UX Designer', experience: '12+ years in user experience and interface design.', img: 'https://randomuser.me/api/portraits/women/40.jpg' },
          { name: 'Robert Williams', role: 'Cybersecurity Expert', experience: '17+ years in ethical hacking and cybersecurity.', img: 'https://randomuser.me/api/portraits/men/60.jpg' },
          { name: 'Sophia Lee', role: 'Data Scientist', experience: '10+ years in machine learning and AI-driven analytics.', img: 'https://randomuser.me/api/portraits/women/30.jpg' }
        ].map((member, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-lg border-0 text-center">
              <Card.Img variant="top" src={member.img} alt={member.name} style={imgStyle} className="mx-auto" />
              <Card.Body>
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <p className="text-muted">{member.experience}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Conclusion Section */}
      <Row className="text-center mt-5">
        <Col>
          <h2 className="fw-bold">Join Us Today</h2>
          <p className="text-muted">
            Whether you are a beginner or an experienced developer, SoftTech Infoways provides courses tailored to your learning needs.
            Start your journey with us and unlock your potential in the world of technology!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
