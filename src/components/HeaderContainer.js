import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarScroll from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderContainer = () => {
    return (
        <div>
            <NavbarScroll/>
        </div>
    );
}

export default HeaderContainer;