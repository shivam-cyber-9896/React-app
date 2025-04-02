import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Button, Nav, Card, Alert, Image, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield, FaSignOutAlt, FaTrash, FaBook, FaUserCog, FaPlusCircle } from 'react-icons/fa';

const AdminPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('Student');
  const [image, setImage] = useState(null);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [founders] = useState([{ name: 'Shivam', email: 'shivam@admin.com', image: '' }]);
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deleteType, setDeleteType] = useState('');

  // Handle Image Upload
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Add Student or Teacher
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Name cannot be empty!');
      return;
    }
    setError('');

    if (role === 'Student') {
      setStudents([...students, { name, image }]);
    } else if (role === 'Teacher') {
      setTeachers([...teachers, { name, image }]);
    }
    setName('');
    setImage(null);
  };

  // Add Course
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!courseName.trim()) {
      setError('Course name cannot be empty!');
      return;
    }
    setError('');
    setCourses([...courses, courseName]);
    setCourseName('');
  };

  // Confirm Delete
  const confirmDelete = (index, type) => {
    setDeleteIndex(index);
    setDeleteType(type);
    setShowDeleteModal(true);
  };

  // Delete Student, Teacher, or Course
  const handleDelete = () => {
    if (deleteType === 'Student') {
      setStudents(students.filter((_, i) => i !== deleteIndex));
    } else if (deleteType === 'Teacher') {
      setTeachers(teachers.filter((_, i) => i !== deleteIndex));
    } else if (deleteType === 'Course') {
      setCourses(courses.filter((_, i) => i !== deleteIndex));
    }
    setShowDeleteModal(false);
  };

  // Logout Function
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white p-3 min-vh-100">
          <h4 className="text-center mb-4">Admin Panel</h4>
          <Nav className="flex-column">
            <Nav.Link className="text-white" href="#dashboard">📊 Dashboard</Nav.Link>
            <Nav.Link className="text-white" href="#students">🎓 Students</Nav.Link>
            <Nav.Link className="text-white" href="#teachers">👨‍🏫 Teachers</Nav.Link>
            <Nav.Link className="text-white" href="#courses">📚 Courses</Nav.Link>
            <Nav.Link className="text-white" href="#accounts">⚙️ Account Management</Nav.Link>
          </Nav>
          <Button variant="danger" className="mt-4 w-100" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </Button>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h2 className="mb-4">Welcome, Admin Shivam! 🎉</h2>

          {/* Dashboard Cards */}
          <Row className="mb-4">
            <Col md={3}>
              <Card className="shadow-sm p-3 text-center">
                <FaUserGraduate size={40} color="blue" />
                <h4>{students.length}</h4>
                <p>Total Students</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm p-3 text-center">
                <FaChalkboardTeacher size={40} color="green" />
                <h4>{teachers.length}</h4>
                <p>Total Teachers</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm p-3 text-center">
                <FaBook size={40} color="purple" />
                <h4>{courses.length}</h4>
                <p>Total Courses</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm p-3 text-center">
                <FaUserShield size={40} color="red" />
                <h4>{founders.length}</h4>
                <p>Founders</p>
              </Card>
            </Col>
          </Row>

          {/* Add Course Form */}
          <Card className="p-3 mb-4">
            <h4>Add Course</h4>
            <Form onSubmit={handleAddCourse}>
              <Row>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    placeholder="Enter course name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </Col>
                <Col md={3}>
                  <Button type="submit" className="w-100"><FaPlusCircle /> Add Course</Button>
                </Col>
              </Row>
            </Form>
          </Card>

          {/* Courses List */}
          <h3 id="courses" className="mt-4">📚 Courses</h3>
          <Table striped bordered hover>
            <thead>
              <tr><th>#</th><th>Course Name</th><th>Action</th></tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{c}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => confirmDelete(i, 'Course')}><FaTrash /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this {deleteType}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPage;
