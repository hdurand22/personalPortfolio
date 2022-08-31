import React, { useState, useEffect, useRef, useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import BoomBox from '../assets/boombox.jpg';
import { ParallaxLayer } from '@react-spring/parallax';
import { ScreenSizeContext } from '../App';

const About = ({ parallax }) => {
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
        <ParallaxLayer className='layer' offset={1} speed={0.8}>
          <div className='section-header' id='about'>
            <h1>About Me</h1>
            <Breadcrumbs parallax={ref} />  
          </div>
          <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
            <Col xxl={4} xl={6} md={5} sm={9} xs={9} className='section-image'>
              <img src={BoomBox} fluid='true' alt='Cassette Player Vectors by Vecteezy' />
            </Col>
            <Col xxl={6} xl={10} lg={11} md={11} sm={11} xs={11} className='section-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Quam lacus suspendisse faucibus interdum posuere. Ut sem viverra aliquet eget. Quis varius quam quisque id diam. Fames ac turpis egestas integer eget aliquet. Nisi vitae suscipit tellus mauris a diam maecenas. Nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus vitae aliquet nec ullamcorper sit amet risus. Tortor condimentum lacinia quis vel eros donec ac.

              Nunc scelerisque viverra mauris in aliquam sem. Faucibus turpis in eu mi. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Sit amet commodo nulla facilisi. Et netus et malesuada fames ac turpis egestas sed tempus. Mauris vitae ultricies leo integer. Amet commodo nulla facilisi nullam. Gravida quis blandit turpis cursus. Neque convallis a cras semper auctor neque vitae tempus quam. Odio facilisis mauris sit amet massa vitae tortor condimentum. Maecenas pharetra convallis posuere morbi. Egestas quis ipsum suspendisse ultrices. Orci nulla pellentesque dignissim enim sit amet venenatis.

              Ultricies mi eget mauris pharetra et ultrices. Placerat orci nulla pellentesque dignissim enim sit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Lectus urna duis convallis convallis tellus. Venenatis lectus magna fringilla urna. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris nunc congue nisi vitae suscipit. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Pulvinar proin gravida hendrerit lectus. Imperdiet massa tincidunt nunc pulvinar. Volutpat odio facilisis mauris sit. Ultricies mi eget mauris pharetra et ultrices neque ornare. Tellus mauris a diam maecenas. Nisi vitae suscipit tellus mauris a diam maecenas.</p>
              </Col>
          </Row>
          {/* <ParallaxLayer className='layer' offset={0.93} speed={0.7}>
          </ParallaxLayer> */}
          </ParallaxLayer>
      :
      <>
        <ParallaxLayer className='layer' offset={1} speed={0.8}>
          <div className='section-header' id='about'>
            <h1 onMouseEnter={() => setIsShown(true)}>About Me</h1>
            {isShown &&
              <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
            }
          </div>
          <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
              <Col xxl={4} xl={6} md={5} sm={9} xs={9} className='section-image'>
                <img src={BoomBox} fluid='true' alt='Cassette Player Vectors by Vecteezy' />
              </Col>
            <Col xxl={6} xl={10} lg={11} md={11} sm={11} xs={11} className='section-text'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Quam lacus suspendisse faucibus interdum posuere. Ut sem viverra aliquet eget. Quis varius quam quisque id diam. Fames ac turpis egestas integer eget aliquet. Nisi vitae suscipit tellus mauris a diam maecenas. Nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus vitae aliquet nec ullamcorper sit amet risus. Tortor condimentum lacinia quis vel eros donec ac.

                Nunc scelerisque viverra mauris in aliquam sem. Faucibus turpis in eu mi. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Sit amet commodo nulla facilisi. Et netus et malesuada fames ac turpis egestas sed tempus. Mauris vitae ultricies leo integer. Amet commodo nulla facilisi nullam. Gravida quis blandit turpis cursus. Neque convallis a cras semper auctor neque vitae tempus quam. Odio facilisis mauris sit amet massa vitae tortor condimentum. Maecenas pharetra convallis posuere morbi. Egestas quis ipsum suspendisse ultrices. Orci nulla pellentesque dignissim enim sit amet venenatis.

                Ultricies mi eget mauris pharetra et ultrices. Placerat orci nulla pellentesque dignissim enim sit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Lectus urna duis convallis convallis tellus. Venenatis lectus magna fringilla urna. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris nunc congue nisi vitae suscipit. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Pulvinar proin gravida hendrerit lectus. Imperdiet massa tincidunt nunc pulvinar. Volutpat odio facilisis mauris sit. Ultricies mi eget mauris pharetra et ultrices neque ornare. Tellus mauris a diam maecenas. Nisi vitae suscipit tellus mauris a diam maecenas.</p>
            </Col>
          </Row>
        </ParallaxLayer>
      </>
      }
    </>
  );
};

export default About;
