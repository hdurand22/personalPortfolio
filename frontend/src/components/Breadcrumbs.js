import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Breadcrumbs = () => {
    // // Get the active page from the URL
    // const location = useLocation();
    // const path = location.pathname;

    return (
        <Breadcrumb id='breadcrumb-container'>
            <BreadcrumbItem linkAs='h3'>
                <Link
                    to='home'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                >
                    Home
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem linkAs='h3'>
                <Link
                    to='about'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                >
                    About Me
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem linkAs='h3'>
                <Link
                    to='portfolio'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                >
                    My Work
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem linkAs='h3'>
                <Link
                    to='contact'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                >
                    Contact
                </Link>
            </BreadcrumbItem>
        </Breadcrumb>
    )
};

export default Breadcrumbs;
