import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import Logo from '../assets/DE_Logo_expanded.png';
import { ScreenSizeContext } from '../App';


const Heading = () => {

    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    return (
        <div itemScope itemType='https://schema.org/ProfessionalService'>
            { !isTabletOrMobile ?
                <header id='main-hover-menu' itemProp='brand'>
                    <Image id='de-logo' itemProp='logo' src={Logo} />
                </header> 
                :
                <header id='main-hover-menu' itemProp='brand'>
                    <Container>
                        <Image id='de-logo' itemProp='logo' src={Logo} />
                    </Container>
                </header>
            }
        </div>
    );
};

export default Heading;
