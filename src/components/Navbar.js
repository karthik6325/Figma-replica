import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSearch, BiUser } from 'react-icons/bi';
import { BsTriangle } from 'react-icons/bs'; // Import the triangle icon
import 'bootstrap/dist/css/bootstrap.min.css';

// ... (other imports)

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
        paddingRight: '15px', // Add padding to the right of each navigation link
    };

    const logoStyle = {
        marginLeft: '6%', // Add margin to the left of the logo
    };

    const userButtonStyle = {
        marginRight: '6%', // Add margin to the right after the user logo
    };

    return (
        <Navbar expand="lg" className="common-background">
            <Container fluid>
                {/* Apply the logoStyle to add margin */}
                <Navbar.Brand href="#" style={logoStyle}><BsTriangle /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="d-flex justify-content-center align-items-center" id="navbarScroll">
                    <Nav className="me-auto my-7 my-lg-0" navbarScroll>
                        <Nav.Link href="#action1" style={navLinkStyle}>Home</Nav.Link>
                        <Nav.Link href="#action2" style={navLinkStyle}>About Us</Nav.Link>
                        <Nav.Link href="#action1" style={navLinkStyle}>Service</Nav.Link>
                        <Nav.Link href="#action2" style={navLinkStyle}>Contact Us</Nav.Link>
                    </Nav>
                    <Form onSubmit={handleSearch} className="d-flex" style={{ paddingRight: 'auto', marginRight: '25%' }}>
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
                    <Button variant="outline-secondary" className="ms-2 user-button" style={userButtonStyle}>
                        <BiUser />
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarScroll;

