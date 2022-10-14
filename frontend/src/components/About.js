import React, { useState, useEffect, useRef, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import { ParallaxLayer } from '@react-spring/parallax';
import { ScreenSizeContext } from '../App';
import AboutIcon from './AboutIcon';

const About = ({ parallax }) => {
  const [isShown, setIsShown] = useState(false);
  const [readMore, setReadMore] = useState(false);
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
            <ParallaxLayer className='layer'  offset={2} speed={0.6} style={{ zIndex: 5, height: '4px' }}>
              <div className='section-header' id='about'>
                <h1>About Us</h1>
                <Breadcrumbs parallax={ref} />  
              </div>
            </ParallaxLayer>
            <ParallaxLayer className='layer' offset={2.2} speed={0.8} > 
              <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
                <Col xxl={4} xl={6} md={5} sm={9} xs={9} className='section-image'>
                  <AboutIcon id='about-icon' height={200} />
                </Col>
                <Col xxl={6} xl={10} lg={11} md={11} sm={11} xs={11} className='section-text'>
                  {!readMore && 
                    <>
                      <h4>Looking to get online and build your brand? Want a cool new feature for your already awesome website? No matter what stage your business is at, Durand Enterprises has got you covered.</h4>
                      <br/>
                    </>
                  }
                  {readMore ? <h5 onClick={() => setReadMore(!readMore)}>Read Less...</h5> : <h5 onClick={() => setReadMore(!readMore)}>Read More...</h5> }
                  {readMore && 
                    <>
                      <p>Durand Enterprises was started to give Hayden Durand - founder, owner, and sole employee - the opportunity to work with a wide variety of clients and help them bring their visions to life. Hayden specializes in full-stack web development and design, as well as digital marketing, including email marketing, social advertising, and search engine optimization. Through meticulous planning, thoughtful design, and innovative development, Hayden delivers high-quality websites and web applications to every client on his roster.</p>
                      <p>Hayden’s philosophy is to utilize everything at his disposal and not reinvent the wheel. He is a passionate and seasoned JavaScript developer who loves to create custom solutions when the need arises, but he also recognizes that web content management systems, like WordPress, will often meet his clients’ objectives. Regardless of the project, Hayden will work with his clients to determine the ideal approach and mix of technologies for success.</p>
                      <h5>Technologies We Use:</h5>
                      <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>WordPress</li>
                        <li>HTML/CSS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                      </ul>
                    </>
                  }
                </Col>
              </Row>
            </ParallaxLayer>
          </>
      :
        <>
          <ParallaxLayer className='layer' offset={2} speed={0.6}>
            <div className='section-header' id='about'>
              <h1 onMouseEnter={() => setIsShown(true)}>About Us</h1>
              {isShown &&
                <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
              }
            </div>
          </ParallaxLayer>
          <ParallaxLayer className='layer' offset={2.2} speed={0.8}>
            <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
                <Col xxl={4} xl={6} md={5} sm={9} xs={9} className='section-image'>
                  <AboutIcon />
                </Col>
              <Col xxl={6} xl={10} lg={11} md={11} sm={11} xs={11} className='section-text'>
                <h4>Looking to get online and build your brand? Want a cool new feature for your already awesome website? No matter what stage your business is at, Durand Enterprises has got you covered.</h4>
                <br/>
                <p>Durand Enterprises was started to give Hayden Durand - founder, owner, and sole employee - the opportunity to work with a wide variety of clients and help them bring their visions to life. Hayden specializes in full-stack web development and design, as well as digital marketing, including email marketing, social advertising, and search engine optimization. Through meticulous planning, thoughtful design, and innovative development, Hayden delivers high-quality websites and web applications to every client on his roster.</p>
                <p>Hayden’s philosophy is to utilize everything at his disposal and not reinvent the wheel. He is a passionate and seasoned JavaScript developer who loves to create custom solutions when the need arises, but he also recognizes that web content management systems, like WordPress, will often meet his clients’ objectives. Regardless of the project, Hayden will work with his clients to determine the ideal approach and mix of technologies for success.</p>
                <h5>Technologies We Use:</h5>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>WordPress</li>
                  <li>HTML/CSS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                </ul>
              </Col>
            </Row>
          </ParallaxLayer>
        </>
      }
    </>
  );
};

export default About;
