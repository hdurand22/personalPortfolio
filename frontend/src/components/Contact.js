import { ParallaxLayer } from '@react-spring/parallax';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, FormControl, FormGroup, Form, Button } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import Phone from '../assets/telephone.jpg';

const Contact = ({ parallax }) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(parallax);

    const [status, setStatus] = useState('Submit');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const { name, email, message } = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        let res = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setStatus('Submit');

        let result = await res.json();
        alert(result.status);
    }

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
                        <img src={Phone} fluid='true' className='section-image' alt='Old Phone Vectors by Vecteezy' />
                    </Col>
                    <Col className='section-text'>
                        <Form onSubmit={handleSubmit}>
                            <h3>Get in touch with me!</h3>
                            <FormGroup className='mb-3' controlId='contactName'>
                                <Form.Label>Name</Form.Label>
                                <FormControl type='text' placeholder='Enter your full name' />
                            </FormGroup>
                            <FormGroup className='mb-3' controlId='contactEmail'>
                                <Form.Label>Email</Form.Label>
                                <FormControl type='email' placeholder='Enter your email address' />
                            </FormGroup>
                            <FormGroup className='mb-3' controlId='contactMessage'>
                                <Form.Label>Message</Form.Label>
                                <FormControl as='textarea' rows={8} />
                            </FormGroup>
                            <Button>{status}</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>

    )
};

export default Contact;
