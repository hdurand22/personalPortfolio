import React, { useRef } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const Breadcrumbs = ({ setIsShown, parallax }) => {
    const ref = useRef(parallax).current.current.current;

    return (
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
    )
};

export default Breadcrumbs;
