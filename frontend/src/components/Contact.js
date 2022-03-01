import { ParallaxLayer } from '@react-spring/parallax';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, FormControl, FormGroup, Form, Button } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import Phone from '../assets/telephone.jpg';

const Contact = ({ parallax }) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(parallax);

    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        subject: 'Contact from personal website',
        message: ''
    });
    const [status, setStatus] = useState('Submit');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => {
            return {
                ...prev,
                [name]: value 
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message, subject } = inputs;
        setStatus('Sending...');


        axios.post('/sendtome', {
            name,
            email,
            subject,
            text: message
        }).then(setStatus('Submit')).then(setInputs({
            email: '',
            name: '',
            message: ''
        }));
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
            <ParallaxLayer offset={1.8} speed={0.8}>
                <Row className='section-content'>
                    <Col>
                        <img src={Phone} fluid='true' className='section-image' alt='Old Phone Vectors by Vecteezy' />
                    </Col>
                    <Col className='section-text'>
                        <Form onSubmit={handleSubmit}>
                            <h3>Get in touch with me!</h3>
                            <FormGroup className='mb-3' controlId='contactName'>
                                <Form.Label>Name</Form.Label>
                                <FormControl type='text' name='name' placeholder='Enter your full name' value={inputs.name} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup className='mb-3' controlId='contactEmail'>
                                <Form.Label>Email</Form.Label>
                                <FormControl type='email' name='email' placeholder='Enter your email address' value={inputs.email} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup className='mb-3' controlId='contactMessage'>
                                <Form.Label>Message</Form.Label>
                                <FormControl as='textarea' name='message' rows={8} value={inputs.message} onChange={handleChange}/>
                            </FormGroup>
                            <Button type='submit'>{status}</Button>
                        </Form>
                    </Col>
                </Row>
            </ParallaxLayer>
            </Container>
        </>

    )
};

export default Contact;
