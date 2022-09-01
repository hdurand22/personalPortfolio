import React, { useRef, useContext, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ScreenSizeContext } from '../App';

const DropdownMenu = ({ setIsShown, parallax }) => {
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
                <Navbar id='dropdown-nav' onMouseLeave={() => setIsShown(false)}>
                    <Container id='dropdown-link-container'>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='me-auto'>
                                <h2 className='nav-option' onClick={() => handleSelect(1)}>About Me</h2>
                                <h2 className='nav-option' onClick={() => handleSelect(2)}>My Work</h2>
                                <h2 className='nav-option' onClick={() => handleSelect(3)}>Contact</h2>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                :
                <Navbar id='dropdown-nav-mobile' expand='xxl' expanded={expanded}>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => expanded ? setExpanded(false) : setExpanded(true)}/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                                <h2 className='nav-option' onClick={() => handleSelect(1)}>About Me</h2>
                                <h2 className='nav-option' onClick={() => handleSelect(2)}>My Work</h2>
                                <h2 className='nav-option' onClick={() => handleSelect(3)}>Contact</h2>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            }
        </>
    )

};

export default DropdownMenu;
