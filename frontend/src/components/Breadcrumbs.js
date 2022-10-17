import React, { useRef, useContext, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Navbar, Nav } from 'react-bootstrap';
import { ScreenSizeContext } from '../App';

const Breadcrumbs = ({ setIsShown, parallax }) => {
    const ref = useRef(parallax).current.current.current;
    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    const [expanded, setExpanded] = useState(false);

    const handleSelect = (pageNumber) => {
        setExpanded(false);
        ref.scrollTo(pageNumber);
    }

    return (
        <>
        {!isTabletOrMobile ?
            <Breadcrumb onMouseLeave={() => setIsShown(false)} id='breadcrumb-container'>
                <BreadcrumbItem className='floating-link' linkAs='h3' onClick={() => ref.scrollTo(0)}>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem className='floating-link' linkAs='h3' onClick={() => ref.scrollTo(1)}>
                    Our Work
                </BreadcrumbItem>
                <BreadcrumbItem className='floating-link' linkAs='h3' onClick={() => ref.scrollTo(2)}>
                    About Us
                </BreadcrumbItem>
                <BreadcrumbItem className='floating-link' linkAs='h3' onClick={() => ref.scrollTo(3)}>
                    Contact
                </BreadcrumbItem>
            </Breadcrumb>
            :
            <Navbar className='nav-mobile' expand='xxl' expanded={expanded}>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => expanded ? setExpanded(false) : setExpanded(true)} />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                            <h3 className='nav-option' onClick={() => handleSelect(0)}>Home</h3>
                            <h3 className='nav-option' onClick={() => handleSelect(1)}>Our Work</h3>
                            <h3 className='nav-option' onClick={() => handleSelect(2)}>About Us</h3>
                            <h3 className='nav-option' onClick={() => handleSelect(3)}>Contact</h3>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
        }
        </>
        
    )
};

export default Breadcrumbs;
