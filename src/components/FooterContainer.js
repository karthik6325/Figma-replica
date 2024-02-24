import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <span style={{ color: 'black' }}>Current Culture: United States - English</span>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="#" style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Contact Us</a>
              <a href="#" style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Privacy and Cookies</a>
              <a href="#" style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Trademark</a>
              <a href="#" style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>About Our Ads</a>
              <span style={{ color: 'black' }}>&copy; {new Date().getFullYear()} Microsoft</span>
            </div>
          </Col>
        </Row>
        <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
        <Row>
          <Col xs={12} md={4}>
            <h5 style={{ color: 'black' }}>Service Hub</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Getting Started</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Release Notes</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Give Feedback</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Documentation</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 style={{ color: 'black' }}>Contact</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Contact Details</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Manage Access</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Shared Files</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 style={{ color: 'black' }}>Support</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Catalog</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Plans</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <h5 style={{ color: 'black' }}>Health</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Critical Alerts</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Product Updates</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Office 365 Roadmap</a></li>
              <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Assessments</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f0e5f5',
  color: '#000',
  padding: '2rem 0',
};

export default Footer;
