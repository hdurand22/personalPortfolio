import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { ParallaxLayer } from '@react-spring/parallax';
import { TransitionGroup } from 'react-transition-group';
import Heading from './Heading';
import HomeIcon from './HomeIcon';

const Home = ({ parallax }) => {
    
    const [toggle, setToggle] = useState(false);
    
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
                wait={1250}
                onReveal={() => setToggle(true)}
            >
                <ParallaxLayer className='layer' offset={0} speed={0.8}>
                    <div className='image-flex'>
                        <HomeIcon toggle={toggle} />
                    </div>
                </ParallaxLayer>
            </Fade>
        </div>
    )


};

export default Home;
