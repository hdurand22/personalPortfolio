import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { ParallaxLayer } from '@react-spring/parallax';
import Heading from './Heading';

const Home = ({ parallax }) => {
    
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle(true);
    }, []);

    const logoSpring = useSpring({
        transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(400px, 0px, 0px)`,
        opacity: toggle ? 1 : 0,
        delay: 500
    })
    
    return (
        <animated.div style={logoSpring} id='home'>
            <ParallaxLayer className='layer' offset={0} speed={0.8}>
                <Heading parallax={parallax} />
            </ParallaxLayer>
        </animated.div>
    )


};

export default Home;
