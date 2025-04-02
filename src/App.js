import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import AuthButtons from './AuthButtons';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Ourweb from './Ourweb';
import Top from './Top';
import Footer from './Footer';
import AdminPage from './AdminPage';
import Form from './Form';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <Router>
     
      <Top />
      <Ourweb /> 
      <Routes>
        <Route path="/auth" element={<AuthButtons />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Form />
      <Footer />
     
    </Router>
  );
};

export default App;
