import React from "react";
import { Image, Popover, OverlayTrigger } from 'react-bootstrap';

const ProjectLogoPopover = ({ project }) => {
    
    const popover = (
        <Popover id='popover-basic'>
            <Popover.Header as='h3'>{project.title}</Popover.Header>
            <Popover.Body>
                <p>{project.description}</p>
                <p>
                    <a 
                        className='btn btn-outline-secondary' 
                        href={project.siteLink} 
                        role='button' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Check out this project!
                    </a>
                </p>
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger='click' rootClose={true} placement='auto-start' overlay={popover}>
            <Image roundedCircle={true} src={project.image} className='project-circle'/>
        </OverlayTrigger>
    )

}

export default ProjectLogoPopover;