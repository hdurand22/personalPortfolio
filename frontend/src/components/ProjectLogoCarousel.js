import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProjectLogoPopover from './ProjectLogoPopover';

const ProjectLogoCarousel = ({ projects }) => {
  return (
    <Carousel 
        controls={false}
        interval={null}
        variant='dark'
    >
        {projects.map((project, index) => (
            <Carousel.Item key={index}>
                <ProjectLogoPopover key={index} project={project} />
            </Carousel.Item>
          ))}
    </Carousel>
  )
}

export default ProjectLogoCarousel