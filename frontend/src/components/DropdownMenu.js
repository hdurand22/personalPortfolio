import React, { useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const DropdownMenu = ({ setIsShown, parallax }) => {
    const ref = useRef(parallax);
    
    return (
        <Navbar id='dropdown-nav' bg="light" expand="lg" collapseOnSelect onMouseLeave={() => setIsShown(false)}>
            <Container id='dropdown-link-container'>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <h1 className='nav-option' onClick={() => ref.current.current.scrollTo(1)}>About Me</h1>
                        <h1 className='nav-option' onClick={() => ref.current.current.scrollTo(2)}>My Work</h1>
                        <h1 className='nav-option' onClick={() => ref.current.current.scrollTo(3)}>Contact</h1>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

};

export default DropdownMenu;
