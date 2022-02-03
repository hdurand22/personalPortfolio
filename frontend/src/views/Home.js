import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { Zoom, Fade } from 'react-reveal';
import Reveal from 'react-reveal/Reveal';
import CassetteTape from '../assets/Cassette_Tape.mp4'


const Home = () => {
    const dropdownRef = useRef(null)
    const [isShown, setIsShown] = useState(false);
    
    useEffect(() => {
        const mouseLeaveEvent = (e) => {
            e.preventDefault();
            console.log(e);
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
    <div id='home-screen'>
        <Fade left duration={2500} ssrReveal='true' >
            <video autoPlay muted loop id='home-screen-video' >
                <source src={CassetteTape} type='video/mp4'/>
            </video>
            <>
                    <header id='main-hover-menu'>
                        <h1 onMouseEnter={() => setIsShown(!isShown)}>durand enterprises</h1>
                    </header>
                    {isShown && (
                        <Zoom>
                            <DropdownMenu setIsShown={setIsShown}/>
                        </Zoom>
                    )}
            </>
            <footer>
                <p id='home-footer-text'>Background video courtesy of <a href='http://www.beachfrontbroll.com/' id='home-footer-link'>Beachfront B-Roll</a></p>
            </footer>
        </Fade>
    </div>
  )
  
};

export default Home;
