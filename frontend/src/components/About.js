import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import BoomBox from '../assets/boombox.jpg';
import { ParallaxLayer } from '@react-spring/parallax';

const About = ({ parallax }) => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(parallax);

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
      <div className='section-header' id='about'>
        <h1 onMouseEnter={() => setIsShown(true)}>About Me</h1>
        {isShown &&
          <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
        }
      </div>
      <Container>
      <ParallaxLayer offset={0.99} speed={0.8}>
        <Row className='section-content'>
            <Col xxl={4} className='section-image'>
              <img src={BoomBox} fluid='true' alt='Cassette Player Vectors by Vecteezy' />
            </Col>
          <Col className='section-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Quam lacus suspendisse faucibus interdum posuere. Ut sem viverra aliquet eget. Quis varius quam quisque id diam. Fames ac turpis egestas integer eget aliquet. Nisi vitae suscipit tellus mauris a diam maecenas. Nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus vitae aliquet nec ullamcorper sit amet risus. Tortor condimentum lacinia quis vel eros donec ac.

              Nunc scelerisque viverra mauris in aliquam sem. Faucibus turpis in eu mi. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Sit amet commodo nulla facilisi. Et netus et malesuada fames ac turpis egestas sed tempus. Mauris vitae ultricies leo integer. Amet commodo nulla facilisi nullam. Gravida quis blandit turpis cursus. Neque convallis a cras semper auctor neque vitae tempus quam. Odio facilisis mauris sit amet massa vitae tortor condimentum. Maecenas pharetra convallis posuere morbi. Egestas quis ipsum suspendisse ultrices. Orci nulla pellentesque dignissim enim sit amet venenatis.

              Ultricies mi eget mauris pharetra et ultrices. Placerat orci nulla pellentesque dignissim enim sit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Lectus urna duis convallis convallis tellus. Venenatis lectus magna fringilla urna. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris nunc congue nisi vitae suscipit. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Pulvinar proin gravida hendrerit lectus. Imperdiet massa tincidunt nunc pulvinar. Volutpat odio facilisis mauris sit. Ultricies mi eget mauris pharetra et ultrices neque ornare. Tellus mauris a diam maecenas. Nisi vitae suscipit tellus mauris a diam maecenas.</p>
          </Col>
        </Row>
      </ParallaxLayer>
      </Container>
    </>
  );
};

export default About;
