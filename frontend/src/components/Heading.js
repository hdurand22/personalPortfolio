import React, { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';


const Heading = ({parallax}) => {
    const [isShown, setIsShown] = useState(false);

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
        <header id='main-hover-menu'>
                <h1 id='de-header-text' onMouseEnter={() => setIsShown(true)}>durand enterprises</h1>
                {isShown &&
                    <DropdownMenu setIsShown={setIsShown} parallax={parallax} />
                }
                <h3 id='home-subtitle'>Custom Web Development and Tech Consulting</h3>
        </header>
    );
};

export default Heading;
