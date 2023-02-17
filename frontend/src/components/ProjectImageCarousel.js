import React, { useContext } from 'react';
import { ScreenSizeContext } from '../App';
import { Carousel, Image, Popover, OverlayTrigger } from 'react-bootstrap';

const ProjectImageCarousel = ({ projectCarouselImages }) => {
  const { isTabletOrMobile } = useContext(ScreenSizeContext);
  // const [showMobileImage, setShowMobileImage] = useState(false);
  
  const popover = (image) => {
      return (
        <Popover id='popover-basic'>
            <Popover.Header>{image.title}</Popover.Header>
            <Popover.Body>
                <p>{image.description}</p>
            </Popover.Body>
        </Popover>
      )
  }
  
  return (
    <Carousel 
        interval={2000}
        variant='light'
        indicators={false}
    >
        {projectCarouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              {!isTabletOrMobile ? (
                <OverlayTrigger trigger={['hover', 'focus']} placement='auto-start' overlay={popover(image)}>
                  <Image className='project-image-carousel-image' key={index} src={image.image} />
                </OverlayTrigger>
              ) :
              ( 
                <OverlayTrigger trigger={['hover', 'focus']} placement='auto-start' overlay={popover(image)}>
                  <Image className='project-image-carousel-image' key={index} src={image.image} />
                </OverlayTrigger>
              )
              }
            </Carousel.Item>
          ))}
    </Carousel>
  )
}

export default ProjectImageCarousel