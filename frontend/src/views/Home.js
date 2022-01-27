import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({}) => {
  return (
    <header>
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to='/about'><h1>About Me</h1></Nav.Link>
                    <Nav.Link as={Link} to='/portfolio'><h1>My Work</h1></Nav.Link>
                    <Nav.Link as={Link} to='/contact'><h1>Contact</h1></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
  
};

export default Home;
