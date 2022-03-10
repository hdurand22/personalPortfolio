import React from 'react';
import { Fade } from 'react-reveal';
import { ParallaxLayer } from '@react-spring/parallax';
import { TransitionGroup } from 'react-transition-group';
import Heading from './Heading';
import Computer from '../assets/computer.png';

const Home = ({ parallax }) => {

    return (
        <div id='home'>
            <TransitionGroup id='home-screen'>
                <Fade
                    right
                    appear={true}
                    delay={1250}
                    duration={1000}
                    timeout={1000}
                >
                    <Heading parallax={parallax} />
                </Fade>
            </TransitionGroup>
            <Fade
                left
                appear={true}
                duration={1250}
                timeout={1250}
            >
                <ParallaxLayer className='layer' offset={0} speed={0.8}>
                    <div className='image-flex'>
                        <img id='splash-computer' src={Computer} alt='Cassette Player Vectors by Vecteezy' />
                    </div>
                </ParallaxLayer>
            </Fade>
        </div>
    )


};

export default Home;
