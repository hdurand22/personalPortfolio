import React, { useRef, useContext, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ScreenSizeContext } from '../App';

const DropdownMenu = ({ parallax }) => {
    const ref = useRef(parallax).current.current;
    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    const [expanded, setExpanded] = useState(false);

    const handleSelect = (pageNumber) => {
        setExpanded(false);
        ref.scrollTo(pageNumber);
    }
    
    return (
        <>
            {!isTabletOrMobile ?
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
                :
                <Navbar id='dropdown-nav-mobile' expand='xxl' expanded={expanded}>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => expanded ? setExpanded(false) : setExpanded(true)}/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                                <h4 className='nav-option' onClick={() => handleSelect(1)}>Our Work</h4>
                                <h4 className='nav-option' onClick={() => handleSelect(2)}>About Us</h4>
                                <h4 className='nav-option' onClick={() => handleSelect(3)}>Contact</h4>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            }
        </>
    )

};

export default DropdownMenu;
