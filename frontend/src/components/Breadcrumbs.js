import React, { useRef, useContext } from 'react';
import { Breadcrumb, BreadcrumbItem, Navbar, Nav } from 'react-bootstrap';
import { ScreenSizeContext } from '../App';

const Breadcrumbs = ({ setIsShown, parallax }) => {
    const ref = useRef(parallax).current.current.current;

    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    return (
        <>
        {!isTabletOrMobile ?
            <Breadcrumb onMouseLeave={() => setIsShown(false)} id='breadcrumb-container'>
                <BreadcrumbItem linkAs='h3' onClick={() => ref.scrollTo(0)}>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem linkAs='h3' onClick={() => ref.scrollTo(1)}>
                    About Me
                </BreadcrumbItem>
                <BreadcrumbItem linkAs='h3' onClick={() => ref.scrollTo(2)}>
                    My Work
                </BreadcrumbItem>
                <BreadcrumbItem linkAs='h3' onClick={() => ref.scrollTo(3)}>
                    Contact
                </BreadcrumbItem>
            </Breadcrumb>
        :
            <Navbar className='nav-mobile' expand='xxl' collapseOnSelect>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                            <h3 className='nav-option' onClick={() => ref.scrollTo(1)}>About Me</h3>
                            <h3 className='nav-option' onClick={() => ref.scrollTo(2)}>My Work</h3>
                            <h3 className='nav-option' onClick={() => ref.scrollTo(3)}>Contact</h3>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
        }
        </>
        
    )
};

export default Breadcrumbs;
