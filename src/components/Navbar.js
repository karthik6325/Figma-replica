import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSearch, BiUser } from 'react-icons/bi';
import { BsTriangle } from 'react-icons/bs'; // Import the triangle icon
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarScroll = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.location.href = searchUrl;
    }
  };

  const navLinkStyle = {
    fontSize: '1.2rem', // Adjust the font size as needed
  };

  return (
    <Navbar expand="lg" className="common-background">
      <Container fluid>
        {/* Replace 'Logo' with the triangle icon */}
        <Navbar.Brand href="#"><BsTriangle /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="d-flex justify-content-center align-items-center" id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>About Us</Nav.Link>
            <Nav.Link href="#action1" style={navLinkStyle}>Service</Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>Contact Us</Nav.Link>
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex" style={{ paddingRight: 'auto', marginRight: 'auto' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit" className="search-button">
              <BiSearch />
            </Button>
          </Form>
          <Button variant="outline-secondary" className="ms-2 user-button">
            <BiUser />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarScroll;
