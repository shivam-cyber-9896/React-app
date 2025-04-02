import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Co = () => {
  const accordionStyle = {
    backgroundColor: 'black',
    color: 'orange',
    border: '2px solid orange',
    borderRadius: '10px',
    padding: '5px',
    transition: '0.3s ease-in-out',
    boxShadow: '0px 0px 10px rgba(255, 165, 0, 0.5)',
  };

  const itemStyle = {
    backgroundColor: 'black',
    color: 'orange',
    transition: '0.3s ease-in-out',
    borderRadius: '8px',
    padding: '8px',
  };

  const hoverEffect = (e, isHovering) => {
    e.currentTarget.style.backgroundColor = isHovering ? 'orange' : 'black';
    e.currentTarget.style.color = isHovering ? 'black' : 'orange';
    e.currentTarget.style.boxShadow = isHovering ? '0px 0px 15px rgba(255, 165, 0, 0.8)' : 'none';
  };

  return (
    <Accordion defaultActiveKey="0" style={accordionStyle}>
      {[
        {
          key: '0',
          title: 'Java',
          overview: 'Java is a powerful, object-oriented programming language widely used in enterprise applications, Android development, and backend systems.',
          topics: ['Core Java', 'Java 8+ Features', 'Multi-threading', 'Spring Boot & Microservices'],
          benefits: ['High demand in enterprise software', 'Gateway to Android development', 'Strong job opportunities'],
        },
        {
          key: '1',
          title: 'C++',
          overview: 'C++ is a high-performance programming language widely used in system software, game development, and competitive programming.',
          topics: ['OOPs', 'STL', 'Data Structures & Algorithms', 'Memory Management'],
          benefits: ['Essential for software engineering', 'Used in game engines', 'Great for system programming'],
        },
        {
          key: '2',
          title: 'C Programming',
          overview: 'C is a foundational language for system programming, operating systems, and embedded systems.',
          topics: ['Basic Syntax', 'Pointers & Memory Management', 'File Handling', 'Embedded C'],
          benefits: ['Strong foundation', 'Used in embedded systems', 'Great for learning low-level programming'],
        },
        {
          key: '3',
          title: 'JavaScript',
          overview: 'JavaScript is the core technology for web development, enabling dynamic and interactive websites.',
          topics: ['ES6+ Features', 'DOM Manipulation', 'REST API Integration', 'React, Vue, Angular'],
          benefits: ['High demand in web development', 'Powers frontend & backend', 'Used worldwide'],
        },
        {
          key: '4',
          title: 'Full Stack Development',
          overview: 'Learn to build complete web applications from frontend to backend using modern technologies.',
          topics: ['HTML, CSS, JS', 'React/Angular', 'Node.js & Express', 'MongoDB & MySQL'],
          benefits: ['End-to-end skills', 'High-paying job opportunities', 'Real-world projects'],
        },
        {
          key: '5',
          title: 'Web Development',
          overview: 'Web development involves designing and developing websites using modern technologies.',
          topics: ['HTML, CSS', 'Bootstrap & Tailwind', 'JavaScript Frameworks', 'Backend with Node.js, PHP'],
          benefits: ['Ideal for beginners', 'Work as a freelancer', 'Build interactive websites'],
        },
      ].map((course) => (
        <Accordion.Item
          key={course.key}
          eventKey={course.key}
          style={{ ...itemStyle }}
          onMouseEnter={(e) => hoverEffect(e, true)}
          onMouseLeave={(e) => hoverEffect(e, false)}
        >
          <Accordion.Header>{course.title}</Accordion.Header>
          <Accordion.Body>
            <strong>Overview:</strong> {course.overview}
            <br /><br />
            <strong>Topics Covered:</strong>
            <ul>
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <br />
            <strong>Benefits:</strong>
            <ul>
              {course.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Co;
