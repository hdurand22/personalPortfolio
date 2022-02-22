import React from 'react';
import { Fade } from 'react-reveal';
import { ParallaxLayer } from '@react-spring/parallax';
import { TransitionGroup } from 'react-transition-group';
// import CassetteTape from '../assets/Cassette_Tape.mp4';
import Heading from './Heading';
// import { VideoLink } from './VideoLink';
import BoomBox from '../assets/boombox.jpg';


const Home = ({parallax}) => {

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
                {/* <Fade
                    right
                    appear={true}
                    delay={1250}
                    duration={1000}
                    timeout={1000}
                >
                    <VideoLink />
                </Fade> */}
            </TransitionGroup>
            <Fade
                left
                appear={true}
                duration={1250}
                timeout={1250}
            >
                <ParallaxLayer offset={0} speed={0.8}>
                    <div className='image-flex'>
                        <a href="https://www.vecteezy.com/free-vector/cassette-player"><img id='splash-boombox' src={BoomBox} alt='Cassette Player Vectors by Vecteezy'/></a>
                    {/* <video autoPlay muted loop id='home-screen-video' >
                        <source id='video-source' src={CassetteTape} type='video/mp4' />
                    </video> */}
                    </div>
                </ParallaxLayer>
            </Fade>
        </div>
    )


};

export default Home;
