import React from "react";
import { Image, Popover, OverlayTrigger } from 'react-bootstrap';

const ProjectLogoPopover = ({ project }) => {
    
    const popover = (
        <Popover id='popover-basic'>
            <Popover.Header as='h3'>{project.title}</Popover.Header>
            <Popover.Body>
                {project.description}
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger='click' placement='auto-start' overlay={popover}>
            <Image roundedCircle={true} src={project.image} className='project-circle'/>
        </OverlayTrigger>
    )

}

export default ProjectLogoPopover;