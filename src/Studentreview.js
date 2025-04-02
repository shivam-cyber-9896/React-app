import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Studentreview = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Amit Sharma',
      rating: 5,
      review: 'SoftTech Infoways helped me gain hands-on experience in full-stack development. Best learning experience!',
    },
    {
      name: 'Priya Verma',
      rating: 4,
      review: 'Amazing faculty and practical training! The projects were industry-relevant and improved my confidence.',
    },
    {
      name: 'Rahul Mehta',
      rating: 5,
      review: 'Best coding bootcamp! I landed a job at a top IT firm thanks to their structured learning.',
    },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 5, review: '' });

  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: 5, review: '' });
  };

  const cardStyle = {
    backgroundColor: 'black',
    color: 'orange',
    border: '2px solid orange',
    padding: '15px',
    textAlign: 'center',
  };

  return (
    <Container className="my-5">
      <h1 style={{ color: 'orange', textAlign: 'center', marginBottom: '20px' }}>
        Student Reviews
      </h1>

      {/* Review Carousel */}
      <Carousel indicators={false} controls={true} interval={3000}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Card style={cardStyle} className="shadow-lg">
              <Card.Body>
                <h4>{review.name}</h4>
                <p>{'⭐'.repeat(review.rating)}</p>
                <p>"{review.review}"</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Review Submission Form */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h3 style={{ color: 'orange', textAlign: 'center' }}>Leave a Review</h3>
          <Form onSubmit={handleSubmit} style={{ background: 'black', padding: '20px', borderRadius: '10px', border: '2px solid orange' }}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'orange' }}>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
                style={{ backgroundColor: 'black', color: 'white', border: '1px solid orange' }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'orange' }}>Rating</Form.Label>
              <Form.Control
                as="select"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                required
                style={{ backgroundColor: 'black', color: 'white', border: '1px solid orange' }}
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>
                    {num} Stars
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'orange' }}>Your Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="review"
                value={newReview.review}
                onChange={handleInputChange}
                required
                style={{ backgroundColor: 'black', color: 'white', border: '1px solid orange' }}
              />
            </Form.Group>
            <Button type="submit" style={{ backgroundColor: 'orange', border: 'none', width: '100%' }}>
              Submit Review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Studentreview;
