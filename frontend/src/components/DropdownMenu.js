import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/about' className="home-nav-link"><h1>About Me</h1></Nav.Link>
                        <Nav.Link as={Link} to='/portfolio' className="home-nav-link"><h1>My Work</h1></Nav.Link>
                        <Nav.Link as={Link} to='/contact' className="home-nav-link"><h1>Contact</h1></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

};

export default DropdownMenu;
