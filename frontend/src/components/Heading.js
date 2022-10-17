import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import Logo from '../assets/DE_Logo_expanded.png';
import { ScreenSizeContext } from '../App';


const Heading = () => {

    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    return (
        <>
            { !isTabletOrMobile ?
                <header id='main-hover-menu'>
                    <Image id='de-logo' src={Logo} />
                </header> 
                :
                <header id='main-hover-menu'>
                    <Container>
                        <Image id='de-logo' src={Logo} />
                    </Container>
                </header>
            }
        </>
    );
};

export default Heading;
