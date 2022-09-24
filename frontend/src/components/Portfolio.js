import React, { useState, useEffect, useRef, useContext } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import projects from '../projects';
import { ParallaxLayer } from '@react-spring/parallax';
import { ScreenSizeContext } from '../App';

const Portfolio = ({ parallax }) => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(parallax);
  const { isTabletOrMobile } = useContext(ScreenSizeContext);

  useEffect(() => {
    const mouseLeaveEvent = (e) => {
      e.preventDefault();
    }

    // If dropdown is open, listen for mouse hovering out of area
    if (isShown) {
      window.addEventListener('mouseover', mouseLeaveEvent);
    }

    return () => {
      window.removeEventListener('mouseover', mouseLeaveEvent);
    }
  }, [isShown]);

  return (
    <>
      {isTabletOrMobile ?
        <>
          <ParallaxLayer className='layer' offset={2} speed={0.6} style={{ zIndex: 2, height: '4px' }}>
            <div className='section-header' id='portfolio'>  
              <h1>My Work</h1>
              <Breadcrumbs parallax={ref} />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.15} speed={0.8}>
              <h4 className='section-text'>Check out some of my past and present clients!</h4>
              <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='card-holder'>
                {projects.map(project => (
                  <Image key={project.title} roundedCircle={true} src={project.image} className='project-circle'/>
                  // <Col key={project.title} className='card-col'>
                  //   <Card >
                  //     <a href={project.siteLink}><Card.Img variant="top" src={project.image} /></a>
                  //     <Card.Body>
                  //       <Card.Title><h4>{project.title}</h4></Card.Title>
                  //       <Card.Text>
                  //         {project.description}
                  //       </Card.Text>
                  //       <a className='btn btn-outline-secondary' href={project.siteLink} role='button'>Check out this project!</a>
                  //     </Card.Body>
                  //   </Card>
                  // </Col>
                ))}
              </Row>
              <p className='section-text'>Interested in something a bit more techincal? Check out my <a href='https://github.com/hdurand22'>GitHub page</a>.</p>
          </ParallaxLayer>
        </>
        :
        <>
          <ParallaxLayer className='layer' offset={2} speed={0.6}>
            <div className='section-header' id='portfolio'>
              <h1 onMouseEnter={() => setIsShown(true)}>My Work</h1>
              {isShown &&
                <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
              }
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.15} speed={0.8}>
            <h5 className='section-text'>Check out some of my past and present clients!</h5>
            <div className='card-holder'>
              {projects.map(project => (
                // <div  className='card-col'>
                  <Image key={project.title} roundedCircle={true} src={project.image} className='project-circle'/>
                  //* <Card >
                  //   <a href={project.siteLink}><Card.Img variant="top" src={project.image} /></a>
                  //   <Card.Body>
                  //     <Card.Title><h4>{project.title}</h4></Card.Title>
                  //     <Card.Text>
                  //       {project.description}
                  //     </Card.Text>
                  //     <a className='btn btn-outline-secondary' href={project.siteLink} role='button'>Check out this project!</a>
                  //   </Card.Body>
                  // </Card> */
                  // </div>}
              ))}
            </div>
            <p className='section-text'>Interested in something a bit more techincal? Check out my <a href='https://github.com/hdurand22'>GitHub page</a>.</p>
          </ParallaxLayer>
        </>
      }
    </>

  )
};

export default Portfolio;
