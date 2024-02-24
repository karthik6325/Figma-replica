import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <span>Current Culture: United States - English</span>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>Contact Us</a>
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>Privacy and Cookies</a>
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>Trademark</a>
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>About Our Ads</a>
              <span>&copy; {new Date().getFullYear()} Your Company Name</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const footerStyle={
  backgroundColor: '#D8BFD8',
  color: '#fff',
  padding: '1rem 0',
};

export default Footer;
