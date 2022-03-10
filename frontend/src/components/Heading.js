import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';
import { ScreenSizeContext } from '../App';


const Heading = ({parallax}) => {
    const [isShown, setIsShown] = useState(false);
    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    console.log(isTabletOrMobile);

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
        <>
            { !isTabletOrMobile ?
                <header id='main-hover-menu'>
                    <h1 id='de-header-text' onMouseEnter={() => setIsShown(true)}>durand enterprises</h1>
                    {isShown &&
                        <DropdownMenu setIsShown={setIsShown} parallax={parallax} />
                    }
                    <h3 id='home-subtitle'>Custom Web Development and Tech Consulting</h3>
                </header> 
                :
                <header id='main-hover-menu'>
                    <DropdownMenu parallax={parallax} />
                    <Container>
                        <h1 id='de-header-text'>durand enterprises</h1>
                        <h3 id='home-subtitle'>Custom Web Development and Tech Consulting</h3>
                    </Container>
                </header>
            }
        </>
    );
};

export default Heading;
