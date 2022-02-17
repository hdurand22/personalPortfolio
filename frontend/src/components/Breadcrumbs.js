import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Breadcrumbs = () => {
    // // Get the active page from the URL
    // const location = useLocation();
    // const path = location.pathname;
    
    return (
        <Breadcrumb id='breadcrumb-container'>
            <BreadcrumbItem className='crumb'>
                <Link 
                    to='home'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                >
                    <h3>Home</h3>
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link 
                to='about'
                activeClass='active'
                spy={true}
                smooth={true}
            >
                <h3>About Me</h3>
            </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link 
                    to='portfolio'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                >
                    <h3>My Work</h3>
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link 
                    to='contact'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                >
                    <h3 >Contact</h3>
                </Link>
            </BreadcrumbItem>
        </Breadcrumb>
    )
};

export default Breadcrumbs;
