import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const DropdownMenu = ({setIsShown}) => {
    return (
        <Navbar id='dropdown-nav' bg="light" expand="lg" collapseOnSelect onMouseLeave={() => setIsShown(false)}>
            <Container id='dropdown-link-container'>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link 
                            to='about' 
                            activeClass='active'
                            spy={true}
                            smooth={true} 
                            className="home-nav-link"
                        >
                            <h1 className='nav-option'>About Me</h1>
                        </Link>
                        <Link 
                            to='portfolio' 
                            activeClass='active'
                            spy={true}
                            smooth={true} 
                            className="home-nav-link"
                        >
                            <h1 className='nav-option'>My Work</h1>
                        </Link>
                        <Link 
                            to='contact' 
                            activeClass='active'
                            spy={true}
                            smooth={true} 
                            className="home-nav-link"
                        >
                            <h1 className='nav-option'>Contact</h1>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

};

export default DropdownMenu;
