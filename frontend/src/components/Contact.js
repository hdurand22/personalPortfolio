import { ParallaxLayer } from '@react-spring/parallax';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import Phone from '../assets/telephone.jpg';

const Contact = ({ parallax }) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(parallax);

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
            <div className='section-header' id='contact'>
                <h1 onMouseEnter={() => setIsShown(true)}>Contact</h1>
                {isShown &&
                    <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
                }
            </div>
            <Container>
                <Row className='section-content'>
                    <Col>
                        <img src={Phone} fluid={true} className='section-image' alt='Old Phone Vectors by Vecteezy' />
                    </Col>
                    <Col className='section-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Quam lacus suspendisse faucibus interdum posuere. Ut sem viverra aliquet eget. Quis varius quam quisque id diam. Fames ac turpis egestas integer eget aliquet. Nisi vitae suscipit tellus mauris a diam maecenas. Nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus vitae aliquet nec ullamcorper sit amet risus. Tortor condimentum lacinia quis vel eros donec ac.

                            Nunc scelerisque viverra mauris in aliquam sem. Faucibus turpis in eu mi. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Sit amet commodo nulla facilisi. Et netus et malesuada fames ac turpis egestas sed tempus. Mauris vitae ultricies leo integer. Amet commodo nulla facilisi nullam. Gravida quis blandit turpis cursus. Neque convallis a cras semper auctor neque vitae tempus quam. Odio facilisis mauris sit amet massa vitae tortor condimentum. Maecenas pharetra convallis posuere morbi. Egestas quis ipsum suspendisse ultrices. Orci nulla pellentesque dignissim enim sit amet venenatis.

                            Ultricies mi eget mauris pharetra et ultrices. Placerat orci nulla pellentesque dignissim enim sit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Lectus urna duis convallis convallis tellus. Venenatis lectus magna fringilla urna. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris nunc congue nisi vitae suscipit. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Pulvinar proin gravida hendrerit lectus. Imperdiet massa tincidunt nunc pulvinar. Volutpat odio facilisis mauris sit. Ultricies mi eget mauris pharetra et ultrices neque ornare. Tellus mauris a diam maecenas. Nisi vitae suscipit tellus mauris a diam maecenas.

                            Et odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Adipiscing vitae proin sagittis nisl rhoncus. Morbi tincidunt augue interdum velit euismod in. Lacus viverra vitae congue eu consequat ac. Purus gravida quis blandit turpis cursus in hac habitasse. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Quis risus sed vulputate odio ut. Orci eu lobortis elementum nibh tellus molestie. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Tempus urna et pharetra pharetra massa. Platea dictumst vestibulum rhoncus est. Est placerat in egestas erat imperdiet sed. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Sed adipiscing diam donec adipiscing tristique. Molestie at elementum eu facilisis sed odio morbi.

                            Sit amet justo donec enim diam vulputate ut. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Morbi leo urna molestie at elementum. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Morbi leo urna molestie at elementum eu. Egestas congue quisque egestas diam in arcu cursus euismod quis. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Amet porttitor eget dolor morbi non arcu. Ornare aenean euismod elementum nisi quis eleifend quam. Aliquam sem et tortor consequat id porta nibh. Nunc sed blandit libero volutpat sed cras ornare. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Sollicitudin ac orci phasellus egestas tellus. Quis auctor elit sed vulputate mi sit amet mauris. Mi tempus imperdiet nulla malesuada. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.</p>
                    </Col>
                </Row>
            </Container>
        </>

    )
};

export default Contact;
