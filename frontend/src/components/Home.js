import React from 'react';
import { Fade } from 'react-reveal';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { TransitionGroup } from 'react-transition-group';
import CassetteTape from '../assets/Cassette_Tape.mp4'
import Heading from './Heading';
import { VideoLink } from './VideoLink';


const Home = () => {

    return (
        <>
            <Fade
                left
                appear={true}
                duration={1250}
                timeout={1250}
            >
                <video autoPlay muted loop id='home-screen-video' >
                    <source id='video-source' src={CassetteTape} type='video/mp4' />
                </video>
            </Fade>
            <TransitionGroup id='home-screen'>
                <Fade
                    left
                    appear={true}
                    delay={1250}
                    duration={1000}
                    timeout={1000}
                >  
                    <Heading />
                </Fade>
                <Fade
                    left
                    appear={true}
                    delay={1250}
                    duration={1000}
                    timeout={1000}
                >
                    <VideoLink />
                </Fade>
            </TransitionGroup>
        </>
    )


};

export default Home;
