import React, { useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const DropdownMenu = ({ setIsShown, parallax }) => {
    const ref = useRef(parallax);
    
    return (
        <Navbar id='dropdown-nav' expand="lg" collapseOnSelect onMouseLeave={() => setIsShown(false)}>
            <Container id='dropdown-link-container'>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(1)}>About Me</h2>
                        <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(2)}>My Work</h2>
                        <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(3)}>Contact</h2>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

};

export default DropdownMenu;
