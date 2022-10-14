import React, { useState, useEffect, useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';
import Logo from '../assets/DE_Logo_expanded.png';
import { ScreenSizeContext } from '../App';


const Heading = ({parallax}) => {
    const [isShown, setIsShown] = useState(true);
    const { isTabletOrMobile } = useContext(ScreenSizeContext);

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
                    <Image id='de-logo' onMouseEnter={() => setIsShown(true)} src={Logo} />
                    {isShown &&
                        <DropdownMenu setIsShown={setIsShown} parallax={parallax} />
                    }
                    <h3 id='home-subtitle'>Custom Web Development and Tech Consulting</h3>
                </header> 
                :
                <header id='main-hover-menu'>
                    <DropdownMenu parallax={parallax} />
                    <Container>
                        <Image src={Logo} />
                        <h3 id='home-subtitle'>Custom Web Development and Tech Consulting</h3>
                    </Container>
                </header>
            }
        </>
    );
};

export default Heading;
