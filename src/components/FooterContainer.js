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
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>Contact Us</a>
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>Privacy and Cookies</a>
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>Trademark</a>
              <a href="#" style={{ color: 'black', marginRight: '10px' }}>About Our Ads</a>
              <span style={{ color: 'black' }}>&copy; {new Date().getFullYear()} Microsoft</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f0e5f5',
  color: '#fff',
  padding: '2rem 0', 
};

export default Footer;
