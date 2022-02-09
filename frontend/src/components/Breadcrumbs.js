import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    // Get the active page from the URL
    const location = useLocation();
    const path = location.pathname;
    
    return (
        <Breadcrumb id='breadcrumb-container'>
            <BreadcrumbItem href='/' className='crumb'>
                <h3>Home</h3>
            </BreadcrumbItem>
            <BreadcrumbItem href='/about' active={path === '/about' ? true : false}>
                <h3>About Me</h3>
            </BreadcrumbItem>
            <BreadcrumbItem href='/portfolio' active={path === '/portfolio' ? true : false}>
                <h3>My Work</h3>
            </BreadcrumbItem>
            <BreadcrumbItem href='/contact' active={path === '/contact' ? true : false}>
                <h3 >Contact</h3>
            </BreadcrumbItem>
        </Breadcrumb>
    )
};

export default Breadcrumbs;
