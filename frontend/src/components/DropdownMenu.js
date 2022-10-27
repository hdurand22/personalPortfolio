import React, { useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const DropdownMenu = ({ parallax }) => {
    const ref = useRef(parallax).current.current;

    const handleSelect = (pageNumber) => {
        ref.scrollTo(pageNumber);
    }
    
    return (
        <Navbar id='dropdown-nav' >
            <Container id='dropdown-link-container'>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <h4 className='nav-option floating-link' onClick={() => handleSelect(1)}>Our Work</h4>
                        <h4 className='nav-option floating-link' onClick={() => handleSelect(2)}>About Us</h4>
                        <h4 className='nav-option floating-link' onClick={() => handleSelect(3)}>Contact</h4>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

};

export default DropdownMenu;
