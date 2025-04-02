import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const courses = [
  {
    title: "Java Programming",
    image: "https://hermes.dio.me/articles/cover/7b89fda2-4af3-4ae0-98bc-ad2b65854909.png",
    description: "Master Java from basics to advanced concepts including OOP, multithreading, and Spring Boot.",
  },
  {
    title: "C++ Programming",
    image: "https://th.bing.com/th/id/OIP.3G0z1kSyixklgZp3WiI0TwAAAA?rs=1&pid=ImgDetMain",
    description: "Learn C++ with STL, OOP, data structures, and competitive programming techniques.",
  },
  {
    title: "C Programming",
    image: "https://th.bing.com/th/id/OIP.3B1GXZpIewwQgao23A_SvQAAAA?rs=1&pid=ImgDetMain",
    description: "Start with C fundamentals, pointers, memory management, and embedded systems.",
  },
  {
    title: "JavaScript Development",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*6c0myzTJcuOTi_vU.png",
    description: "Become a JavaScript expert with ES6+, React.js, Node.js, and full-stack development.",
  },
  {
    title: "Full Stack Development",
    image: "https://th.bing.com/th/id/OIP.8ZZYjDUhUnJvWlPoZIHDFgAAAA?rs=1&pid=ImgDetMain",
    description: "Build end-to-end applications using React, Node.js, Express, MongoDB, and more.",
  },
  {
    title: "Web Development",
    image: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/10193912/Website-Development-Process-01.jpg",
    description: "Learn HTML, CSS, JavaScript, Bootstrap, and modern frameworks like React and Angular.",
  },
];

const Our = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center fw-bold mb-4">Our <span className="text-primary">Courses</span></h1>
      <Row className="gy-4">
        {courses.map((course, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-lg border-0">
              <Card.Img variant="top" src={course.image} alt={course.title} />
              <Card.Body>
                <Card.Title className="fw-bold">{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="primary" className="w-100">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Our;
