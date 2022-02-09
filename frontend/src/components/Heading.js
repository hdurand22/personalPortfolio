import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from './DropdownMenu';

const Heading = () => {
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
        <header id='main-hover-menu'>
                <h1 id='de-header-text' onMouseEnter={() => setIsShown(!isShown)}>durand enterprises</h1>
                {isShown &&
                    <DropdownMenu setIsShown={setIsShown} />
                }
                <h3 id='home-subtitle'>Custom Web Development</h3>
        </header>
    );
};

export default Heading;
