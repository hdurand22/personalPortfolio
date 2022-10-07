import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ProjectImageCarousel = ({ projectCarouselImages }) => {
  return (
    <Carousel 
        interval={2000}
        variant='light'
        indicators={false}
    >
        {projectCarouselImages.map((image, index) => (
            <Carousel.Item key={index}>
                <Image className='project-image-carousel-image' key={index} src={image.image} />
            </Carousel.Item>
          ))}
    </Carousel>
  )
}

export default ProjectImageCarousel