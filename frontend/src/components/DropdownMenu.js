import React, { useRef, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ScreenSizeContext } from '../App';

const DropdownMenu = ({ setIsShown, parallax }) => {
    const ref = useRef(parallax);

    const { isTabletOrMobile } = useContext(ScreenSizeContext);
    
    return (
        <>
            {!isTabletOrMobile ?
                <Navbar id='dropdown-nav' onMouseLeave={() => setIsShown(false)}>
                    <Container id='dropdown-link-container'>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='me-auto'>
                                <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(1)}>About Me</h2>
                                <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(2)}>My Work</h2>
                                <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(3)}>Contact</h2>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                :
                <Navbar id='dropdown-nav-mobile' expand='xxl' collapseOnSelect>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                                <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(1)}>About Me</h2>
                                <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(2)}>My Work</h2>
                                <h2 className='nav-option' onClick={() => ref.current.current.scrollTo(3)}>Contact</h2>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            }
        </>
    )

};

export default DropdownMenu;
