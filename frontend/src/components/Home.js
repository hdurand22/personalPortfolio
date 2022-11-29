import React, { useEffect, useState } from 'react';
import SEO from './SEO';
import { animated, useSpring } from 'react-spring';
import { ParallaxLayer } from '@react-spring/parallax';
import Heading from './Heading';
import DropdownMenu from './DropdownMenu';

const Home = ({ parallax }) => {
    
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle(true);
    }, []);

    const logoSpring = useSpring({
        transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(400px, 0px, 0px)`,
        opacity: toggle ? 1 : 0,
        delay: 500
    });

    const subheadingSpring = useSpring({
        transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(-400px, 0px, 0px)`,
        opacity: toggle ? 1 : 0,
        delay: 1000
    })

    const menuSpring = useSpring({
        // transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(400px, 0px, 0px)`,
        opacity: toggle ? 1 : 0,
        delay: 1750
    })
    
    return (
        <>
            <SEO
                title='Durand Enterprises | Web Development and Tech Consulting'
                description='A one-stop shop for full-stack web and WordPress development, digital strategy, and technical services for businesses and startups. Get online and grow your business.'
                name='Durand Enterprises LLC'
                type='article'
            />
            <animated.div style={logoSpring} id='home'>
                <ParallaxLayer className='layer' offset={0} speed={0.8}>
                    <Heading />
                    <animated.div style={subheadingSpring} offset={0.8} speed={0.8}>
                        <h2 id='subheader'>Custom Web Development and Tech Consulting</h2>
                    </animated.div>
                    <animated.div style={menuSpring}>
                        <DropdownMenu parallax={parallax} />
                    </animated.div>
                </ParallaxLayer>
            </animated.div>
        </>
    )


};

export default Home;
