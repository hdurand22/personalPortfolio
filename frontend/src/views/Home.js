import React, { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { Zoom } from 'react-reveal';

const Home = () => {
    const [isShown, setIsShown] = useState(false);
  
    return (
    <>
        <Zoom>
            <header>
                <h1
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    durand enterprises
                </h1>
            </header>
        </Zoom>
        {isShown && (
            <Zoom>
                <DropdownMenu />
            </Zoom>
        )}
        <footer>
            <p id='home-footer-text'>Background video courtesy of <a href='http://www.beachfrontbroll.com/' id='home-footer-link'>Beachfront B-Roll</a></p>
        </footer>
    </>
  )
  
};

export default Home;
